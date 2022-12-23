import LayoutApp from "../../components/Layout";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Table, Modal, Form, Input, Select, message } from "antd";
import FormItem from "antd/lib/form/FormItem";

const Products = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const [popModel, setPopModel] = useState(false);
  const [editData, setEditData] = useState(false);

  const getAllProducts = async () => {
    try {
      dispatch({ type: "SHOW_LOAD" });
      const { data } = await axios.get("/api/products/getproducts");
      setProductData(data);
      dispatch({ type: "HIDE_LOAD" });
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (record) => {
    try {
      dispatch({ type: "SHOW_LOAD" });
      await axios.post("/api/products/deleteproducts", {
        productId: record._id,
      });
      message.success("Product Deleted!!");
      getAllProducts();
      setPopModel(false);
      dispatch({ type: "HIDE_LOAD" });
      setEditData(null);
      // console.log(data);
    } catch (error) {
      message.error("Something went wrong");
      console.log("Delete : From products.jsx" + error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

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
      title: "Action",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <DeleteOutlined
            className="cart-action"
            onClick={() => handleDelete(record)}
          />
          <EditOutlined
            className="cart-edit"
            onClick={() => {
              setEditData(record);
              setPopModel(true);
            }}
          />
        </div>
      ),
    },
  ];

  const handleSubmit = async (values) => {
    if (editData === null) {
      try {
        dispatch({ type: "SHOW_LOAD" });
        const res = await axios.post("/api/products/addproducts", values);
        message.success("Product Successfully Added");
        getAllProducts();
        setPopModel(false);
        dispatch({ type: "HIDE_LOAD" });
        // console.log(data);
      } catch (error) {
        message.error("Something went wrong");
        console.log("From products.jsx" + error);
      }
    } else {
      try {
        dispatch({ type: "SHOW_LOAD" });
        await axios.put("/api/products/updateproducts", {
          ...values,
          productId: editData._id,
        });
        message.success("Product Details Updated!!");
        getAllProducts();
        setPopModel(false);
        dispatch({ type: "HIDE_LOAD" });
        setEditData(null);
        // console.log(data);
      } catch (error) {
        message.error("Something went wrong");
        console.log("From products.jsx" + error);
      }
    }
  };

  return (
    <LayoutApp>
      <h2>Products</h2>
      <Button className="add-new" onClick={() => setPopModel(true)}>
        Add Product
      </Button>
      <Table dataSource={productData} columns={columns} />
      {popModel && (
        <Modal
          title={`${editData ? "Edit Product" : "Add Product"}`}
          visible={popModel}
          onCancel={() => {
            setEditData(null);
            setPopModel(false);
          }}
          footer={false}
        >
          <Form
            layout="vertical"
            initialValues={editData}
            onFinish={handleSubmit}
          >
            <FormItem name="name" label="Name">
              <Input />
            </FormItem>
            <Form.Item name="category" label="Category">
              <Select>
                <Select.Option value="Pizza">Pizza</Select.Option>
                <Select.Option value="Burger">Burger</Select.Option>
                <Select.Option value="Drink">Drink</Select.Option>
              </Select>
            </Form.Item>

            <FormItem name="price" label="Price">
              <Input />
            </FormItem>
            <FormItem name="image" label="Image URL">
              <Input />
            </FormItem>
            <div className="form-btn-add">
              <Button htmlType="submit" className="add-new">
                Add
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </LayoutApp>
  );
};

export default Products;
