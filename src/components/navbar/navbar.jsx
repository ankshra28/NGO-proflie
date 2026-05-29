import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import styles from './navbar.module.css';
import Logo from './../logo/logo'


// import { getInstitutes } from "../../api/instituteApi";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 



  return (
    <>
      <nav className={`${styles.nav} ${isHome ? styles.homeNav : ""}`}>
        
        {}
        <NavLink to="/">
        <Logo className={styles.logo}/>
          {}
        </NavLink>

        {}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {}
        <div
          className={`${styles.listOfNavMenu} ${
            menuOpen ? styles.mobileMenu : ""
          }`}
        >
          <NavLink to="/" end className={styles.navMenu}>
            Home
          </NavLink>

          <NavLink to="/features" className={styles.features}>
            Features
          </NavLink>

          <NavLink to="/about" className={styles.about}>
            About
          </NavLink>

          <NavLink to="/contact" className={styles.contact}>
            Contact
          </NavLink>

          <div className={styles.loginAndRegister}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Sign Up</NavLink>
          </div>
        </div>
      </nav>

      {/* <hr className={styles.hrFaded} /> */}
    </>
  );
}





export default Navbar;

// export default Navbar;
// import React from "react";
// import { Link } from "react-router-dom";
// import "./navbar.module.css";

// function Navbar() {
//   return (
//     <nav className="navbar">

//       <div className="logo">
//         <h1>Bright Futures</h1>
//         <span>NGO</span>
//       </div>

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/about">About Us</Link>
//         <Link to="/features">Features</Link>
//         <Link to="/login">Login</Link>
//       </div>

//     </nav>
//   );
// }

// export default Navbar;