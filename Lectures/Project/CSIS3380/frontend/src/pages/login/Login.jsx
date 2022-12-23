import { Form, Input, Button, message } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      dispatch({ type: "SHOW_LOAD" });
      const res = await axios.post("/api/users/login", values);

      message.success("User Login Successfully");
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/");

      dispatch({ type: "HIDE_LOAD" });
      // console.log(data);
    } catch (error) {
      message.error("Login Failed");
      console.log("From Login.jsx" + error);
    }
  };
  //if logged in already, redirect to home page
  // useEffect(() => {
  //   localStorage.getItem("auth");
  //   navigate("/");
  // }, []);
  return (
    <div className="form">
      <h2>FAST FOOD POS</h2>
      <p>Login</p>
      <div className="form-group">
        <Form layout="vertical" onFinish={handleSubmit}>
          <FormItem name="userId" label="User ID">
            <Input />
          </FormItem>
          <FormItem name="password" label="Password">
            <Input type="password" />
          </FormItem>
          <div className="form-btn-add">
            <Button htmlType="submit" className="add-new">
              Login
            </Button>
            <Link className="form-other" to="/register">
              Register Here
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
