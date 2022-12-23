import "antd/dist/antd.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Products from "./pages/products/products";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Bills from "./pages/bills/Bills";
import Customers from "./pages/customers/Customers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRouter>
                <Home />
              </ProtectedRouter>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

export function ProtectedRouter({ children }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
