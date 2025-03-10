import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Order from "./components/pages/Order/Order";
import Admin from "./components/pages/Admin/Admin";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="überuns" element={<About />} />
          <Route path="bestellen" element={<Order />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
