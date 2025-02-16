import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div id="layout">
      <Outlet />
    </div>
  );
}

export default Layout;
