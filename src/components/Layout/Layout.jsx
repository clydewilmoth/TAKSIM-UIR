import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "../../i18n";

function Layout() {
  return (
    <div id="layout">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
