import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <div id="layout">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
