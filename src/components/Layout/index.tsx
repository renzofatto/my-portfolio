import { useEffect, useState } from "react";
import LandingHeader from "../LandingHeader";
import "./layout.css";
import { Outlet } from "react-router-dom";
import LittleLandingHeader from "../LittleLandingHeader";

function Layout() {

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      { showHeader && <LandingHeader /> }
      { !showHeader && <LittleLandingHeader /> }
        <div className="main-content">
          <Outlet />
        </div>
    </>
  );
}

export default Layout;
