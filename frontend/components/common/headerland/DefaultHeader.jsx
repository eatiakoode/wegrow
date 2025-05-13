'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    setNavbar(window.scrollY >= 95);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`header-nav menu_style_home_one  style2 navbar-scrolltofixed stricky main-menu ${
        navbar ? "stricky-fixed" : ""
      }`}
    >
      <div className="container-fluid p0">
        {/* Logo */}
        <a className="navbar_brand float-start dn-smd" href="#home">
          <Image
            width={170}
            height={65}
            className="logo1 contain"
            src="/assets/images/logo2.png"
            alt="logo"
          />
          <Image
            width={170}
            height={65}
            className="logo2 contain"
            src="/assets/images/logo2.png"
            alt="logo2"
          />
        </a>

        {/* Navigation */}
        <nav>
          <ul
            id="respMenu"
            className="ace-responsive-menu text-end d-lg-block d-none"
            data-menu-style="horizontal"
          >
            <li className="dropitem">
              <a href="#home" className="ui-active">
                <span className="title">Home</span>
              </a>
            </li>
            <li className="dropitem">
              <a href="#about">
                <span className="title">About Us</span>
              </a>
            </li>
            <li className="dropitem">
              <a href="#gallery">
                <span className="title">Gallery</span>
              </a>
            </li>
            {/* <li className="dropitem">
              <a href="#property">
                <span className="title">Property</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="#residential">Residential</a>
                </li>
                <li>
                  <a href="#commercial">Commercial</a>
                </li>
              </ul>
            </li> */}
            <li className="dropitem">
              <a href="#blogs">
                <span className="title">Blog</span>
              </a>
            </li>
            <li className="dropitem">
              <a href="#faq">
                <span className="title">Faq</span>
              </a>
            </li>
            <li className="last">
              <a href="#news">
                News &amp; Insights
              </a>
            </li>
            <li className="list-inline-item border_listing">
              <a href="tel:+917421922000">
                <span className="flaticon-telephone"></span>
              </a>
            </li>
            <li className="list-inline-item add_listing">
              <a href="javascript:void(0)">
                <span className="dn-lg">Sell your Property</span>
              </a>
            </li>
            <li className="list-inline-item add_listing">
              <a href="#contact">
                <span className="flaticon-calendar"></span>
                <span className="dn-lg">Setup a Meeting</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
