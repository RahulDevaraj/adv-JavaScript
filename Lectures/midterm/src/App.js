import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Home from "./components/home";
import About from "./components/about";
import Features from "./components/features";
import Header from "./components/header";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import empData from "./external/employee-data.json";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [employees, setEmployees] = useState(empData);
  function handleDelete(id) {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
  }

  function handleAdd(name, title, city) {
    const updatedEmployees = [
      ...employees,
      {
        id: v4(),
        name,
        title,
        city,
        active: true,
        img: "https://cdn.pixabay.com/photo/2016/07/11/20/34/lost-places-1510592_960_720.jpg",
      },
    ];
    setEmployees(updatedEmployees);
  }
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <About employees={employees} onDelete={(id) => handleDelete(id)} />
          }
        />
        <Route
          path="features"
          element={
            <Features
              onAdd={(name, title, city) => {
                handleAdd(name, title, city);
              }}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
