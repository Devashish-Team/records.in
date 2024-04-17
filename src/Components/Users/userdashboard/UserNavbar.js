import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../../../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import photo from "../../../Assets/Final Logo My Records-1.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function UserNavbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate=useNavigate()

  const openNav = () => {
    setNav(!nav);
  };


  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img src={photo} alt="" className="w-20 h-20" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="user-dashboard" className="navbar-links">
            My Profile
          </Link>
        </li>
        <li>
          <a href="#features" className="navbar-links">
            My Daily Tracker
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            My Medical History
          </a>
        </li>
      </ul>
<div className="flex gap-2">
      <button
        className="flex justify-center items-center bg-[#f99a1c] text-white px-4 py-2 rounded-full"
        type="button"
        disabled={isButtonDisabled}
        onClick={()=>navigate('/sign-in')}
        
      >
          <span>My-Records.in</span>
            <span className="border-r border-l border-white border-opacity-20 px-3 ml-1"> <FaGooglePlay/></span>
            <span><FaApple/></span>  
      </button>
     
</div>
      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="user-dashboard">
              My Profile
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#Features">
              Features
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#blogs">
              Blogs
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#Contacts">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default UserNavbar;