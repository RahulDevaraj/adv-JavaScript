import Layout from "../../components/Layout";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Button, Table, Modal, Form, Input, Select, message } from "antd";

const Customers = () => {
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
  ];

  return (
    <Layout>
      <h2>All Customers</h2>
      <Table dataSource={billsData} columns={columns} />
    </Layout>
  );
};

export default Customers;
