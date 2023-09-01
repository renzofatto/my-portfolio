import LandingHeader from "../LandingHeader";
import "./layout.css";
import { Outlet } from "react-router-dom";

function Layout() {

  return (
    <>
      <LandingHeader />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
