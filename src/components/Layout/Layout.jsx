import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import "../../i18n";
import css from "./styles.module.css";

function Layout() {
  return (
    <div className={css.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
