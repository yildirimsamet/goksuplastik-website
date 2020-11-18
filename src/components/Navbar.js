import React, { useEffect } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import logo from "../images/goksulogo.png";

function Navbar() {
  useEffect(() => {
    const homeLink = document.getElementById("home-link");
    homeLink.addEventListener("click", () => {
      const el = document.getElementById("navbarSupportedContent");
      el.classList = "navbar-collapse collapse hide";
      window.scrollTo(0, -99999);
    });
    function closeNavbar() {
      const el = document.getElementById("navbarSupportedContent");
      el.classList = "navbar-collapse collapse hide";
    }
    const links = document.getElementsByClassName("nav-link-for-func");
    Array.from(links).forEach((item) => {
      item.addEventListener("click", closeNavbar);
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg static-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img className="navbar-logo" src={logo} alt="goksulogo" />
        </a>
        <h3 className="navbar-title">Göksu Plastik</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars color="var(--redone)" fontSize="24px" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li id="home-link" className="nav-item active">
              <button className="nav-link ">
                Ana sayfa
                <span className="navbar-link-border"></span>
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-for-func" href="#products">
                Ürünler
                <span className="navbar-link-border"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-for-func" href="#about">
                Hakkımızda
                <span className="navbar-link-border"></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                id="nav-contact-link"
                className="nav-link nav-link-for-func"
                href="#contact"
              >
                İletişim <AiOutlinePhone className="nav-icon" />
                <span className="navbar-link-border"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
