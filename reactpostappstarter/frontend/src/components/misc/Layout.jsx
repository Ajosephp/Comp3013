import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { FooterSimple } from "./FooterSimple";
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterSimple />
    </div>
  );
};

export default Layout;

// className={classes.mainContent}
// className={classes.layoutContainer}