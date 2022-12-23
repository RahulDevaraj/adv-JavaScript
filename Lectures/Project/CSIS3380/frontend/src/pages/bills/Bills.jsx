import Layout from "../../components/Layout.jsx";
import { Button, Table, Modal, Form, Input, Select, message } from "antd";
import axios from "axios";
import FormItem from "antd/lib/form/FormItem";
import { useReactToPrint } from "react-to-print";
import { useEffect, useState, useRef } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const Bills = () => {
  const componentRef = useRef();
  const dispatch = useDispatch();
  const [billsData, setBillsData] = useState([]);
  const [popModel, setPopModel] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  const getAllBills = async () => {
    try {
      dispatch({ type: "SHOW_LOAD" });
      const { data } = await axios.get("/api/bills/getbills");
      setBillsData(data);
      dispatch({ type: "HIDE_LOAD" });
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBills();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
    },
    {
      title: "Contact Number",
      dataIndex: "customerPhone",
    },
    {
      title: "Tax",
      dataIndex: "tax",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
    },

    {
      title: "Action",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <EyeOutlined
            className="cart-edit eye"
            onClick={() => {
              setSelectedBill(record);
              setPopModel(true);
            }}
          />
        </div>
      ),
    },
  ];

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Layout>
      <h2>Invoices</h2>

      <Table dataSource={billsData} columns={columns} />
      {popModel && (
        <Modal
          title="Bill Details"
          width={450}
          pagination={false}
          visible={popModel}
          onCancel={() => {
            setPopModel(false);
          }}
          footer={false}
        >
          <div className="card" ref={componentRef}>
            <div className="cardHeader">
              <h2 className="logo">FAST FOOD POS</h2>
              <span>Number: +1 2354578965</span>
              <span>Address: 3425 New West, BC</span>
            </div>
            <div className="cardBody">
              <div className="group">
                <span>Customer Name:</span>
                <span>
                  <b>{selectedBill.customerName}</b>
                </span>
              </div>
              <div className="group">
                <span>Customer Phone:</span>
                <span>
                  <b>{selectedBill.customerPhone}</b>
                </span>
              </div>
              <div className="group">
                <span>Order Date:</span>
                <span>
                  <b>{selectedBill.createdAt.toString().substring(0, 10)}</b>
                </span>
              </div>
              <div className="group">
                <span>Total Amount:</span>
                <span>
                  <b>{selectedBill.totalAmount}</b>
                </span>
              </div>
            </div>
            <div className="cardFooter">
              <h4>Order Details</h4>
              {selectedBill.cartItems.map((items) => (
                <>
                  <div className="footerCard">
                    <div className="group">
                      <span>Items:</span>
                      <span>
                        <b>{items.name}</b>
                      </span>
                    </div>
                    <div className="group">
                      <span>Qty:</span>
                      <span>
                        <b>{items.quantity}</b>
                      </span>
                    </div>
                    <div className="group">
                      <span>Price:</span>
                      <span>
                        <b>
                          $
                          {(
                            Number(items.price) * Number(items.quantity)
                          ).toFixed(2)}
                        </b>
                      </span>
                    </div>
                  </div>
                </>
              ))}
              <div className="footerCardTotal">
                <div className="group">
                  <span>Total:</span>
                  <h3>
                    <b>${selectedBill.totalAmount}</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bills-btn-add">
            <Button htmlType="submit" className="add-new" onClick={handlePrint}>
              Print
            </Button>
          </div>
        </Modal>
      )}
    </Layout>
  );
};

export default Bills;
