import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import Add from "./pages/Admin/Add/Add";
import Service from "./pages/Admin/Service/Service";
import Orders from "./pages/Admin/Orders/Orders";
import User from "./pages/Admin/User/User";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";

const App = () => {
  const url = import.meta.env.VITE_API_URL;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services url={url} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order/:id" element={<PlaceOrder url={url} />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/add" element={<Add url={url} />} />
        <Route path="/admin/service" element={<Service url={url} />} />
        <Route path="/admin/user" element={<User url={url} />} />
        <Route path="/admin/orders" element={<Orders url={url} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
