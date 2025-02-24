import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageUp from "../PageUp/PageUp";
import "../../i18n";
import css from "./styles.module.css";

function Layout() {
  return (
    <div className={css.layout}>
      <Header />
      <PageUp />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
