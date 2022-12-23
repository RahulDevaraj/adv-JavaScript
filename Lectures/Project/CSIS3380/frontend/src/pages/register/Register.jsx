import { Form, Input, Button, message } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      dispatch({ type: "SHOW_LOAD" });
      await axios.post("/api/users/register", values);
      message.success("User Added");
      navigate("/login");
      dispatch({ type: "HIDE_LOAD" });
      // console.log(data);
    } catch (error) {
      message.error("Something went wrong");
      console.log("From products.jsx" + error);
    }
  };
  //if logged in already, redirect to home page
  //   useEffect(() => {
  //     localStorage.getItem("auth");
  //     navigate("/");
  //   }, [navigate]);
  return (
    <div className="form">
      <h2>FAST FOOD POS</h2>
      <p>Register</p>
      <div className="form-group">
        <Form layout="vertical" onFinish={handleSubmit}>
          <FormItem name="name" label="Name">
            <Input />
          </FormItem>
          <FormItem name="userId" label="User ID">
            <Input />
          </FormItem>
          <FormItem name="password" label="Password">
            <Input type="password" />
          </FormItem>
          <div className="form-btn-add">
            <Button htmlType="submit" className="add-new">
              Register
            </Button>
            <Link className="form-other" to="/login">
              Login Here
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
