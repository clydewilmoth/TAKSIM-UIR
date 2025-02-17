import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Order from "./components/pages/Order/Order";
import Contact from "./components/pages/Contact/Contact";
import LegalNotice from "./components/pages/LegalNotice/LegalNotice";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";
import Admin from "./components/pages/Admin/Admin";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="info" element={<About />} />
          <Route path="bestellen" element={<Order />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="impressum" element={<LegalNotice />} />
          <Route path="datenschutz" element={<PrivacyPolicy />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
