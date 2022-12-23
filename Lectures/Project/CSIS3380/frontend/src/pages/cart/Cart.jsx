import LayoutApp from "../../components/Layout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FormItem from "antd/lib/form/FormItem";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Button, Modal, Table, Form, Input, Select, message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [billPopup, setBillPopup] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.rootReducer);
  const handleDecrement = (record) => {
    if (record.quantity !== 1)
      dispatch({
        type: "UPDATE_CART",
        payload: { ...record, quantity: record.quantity - 1 },
      });
  };

  const handleIncrement = (record) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { ...record, quantity: record.quantity + 1 },
    });
  };

  const handleDelete = (record) => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: record,
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} width={60} height={60} />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <MinusCircleOutlined
            className="cart-minus"
            onClick={() => {
              handleDecrement(record);
            }}
          />
          <strong className="cart-quantity">{record.quantity}</strong>
          <PlusCircleOutlined
            className="cart-plus"
            onClick={() => {
              handleIncrement(record);
            }}
          />
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (id, record) => (
        <DeleteOutlined
          className="cart-action"
          onClick={() => {
            handleDelete(record);
          }}
        />
      ),
    },
  ];
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cartItems]);

  const handleSubmit = async (values) => {
    // console.log(values);
    try {
      const newObj = {
        ...values,
        cartItems,
        total,
        tax: Number((total / 15).toFixed(2)),
        totalAmount: Number((total + total / 15).toFixed(2)),
        userId: JSON.parse(localStorage.getItem("auth"))._id,
      };
      await axios.post("api/bills/addbills", newObj);
      message.success("Bill Generated Successfully");
      // localStorage.removeItem("cartItems");
      //localStorage.setItem("cartItems", "[]");
      dispatch({
        type: "CLEAR_CART",
      });

      navigate("/bills");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LayoutApp>
      <h2>Cart</h2>
      <Table dataSource={cartItems} columns={columns} />
      <div className="subTotal">
        <h2>
          Total: <span>${total.toFixed(2)}</span>
        </h2>
        <Button className="add-new" onClick={() => setBillPopup(true)}>
          Add to Invoice
        </Button>
      </div>
      <Modal
        footer={false}
        title="Add to Invoice"
        onCancel={() => setBillPopup(false)}
        visible={billPopup}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <FormItem name="customerName" label="Customer Name">
            <Input />
          </FormItem>
          <FormItem name="customerPhone" label="Customer Phone">
            <Input />
          </FormItem>

          <Form.Item name="paymentMethod" label="Method of Payment">
            <Select>
              <Select.Option value="cash">CASH</Select.Option>
              <Select.Option value="card">CARD</Select.Option>
              <Select.Option value="redeem">REDEEM</Select.Option>
            </Select>
          </Form.Item>
          <div>
            <span>Subtotal: ${total.toFixed(2)}</span>
            <br></br>
            <span>Tax: ${(total / 15).toFixed(2)}</span>
            <h4>Total: ${(total + total / 15).toFixed(2)}</h4>
          </div>

          <div className="form-btn-add">
            <Button htmlType="submit" className="add-new">
              Generate
            </Button>
          </div>
        </Form>
      </Modal>
    </LayoutApp>
  );
};

export default Cart;
