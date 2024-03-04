import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { FooterSimple } from "./FooterSimple";
import classes from './Layout.module.css';


const Layout = () => {
  return (
    
    <div className={classes.layoutContainer}>
      
      <Navbar />
      <main className={classes.mainContent}>
        <Outlet />
      </main>
      <FooterSimple />
      
    </div>
  );
};

export default Layout;