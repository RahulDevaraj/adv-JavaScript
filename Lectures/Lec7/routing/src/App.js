import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Events from "./components/events";
import Products from "./components/products";
import Contacts from "./components/contacts";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import History from "./components/history";
import Services from "./components/services";
import Locations from "./components/locations";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="history" element={<History />} />
          <Route path="services" element={<Services />} />
          <Route path="location" element={<Locations />} />
        </Route>
        <Route path="events" element={<Events />} />
        <Route path="products" element={<Products />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="contacts/:name" element={<Contacts />} />
        <Route path="contacts/:name/:email" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
        <Route path="services" element={<Navigate to="/about/services" />} />
      </Routes>
    </div>
  );
}

export default App;
