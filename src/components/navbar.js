import React from "react";
import "./navbar.css";
import logo from "../img/logo.svg";
import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
const Navbar = () => {
    const navigate = useNavigate()

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className="navbar__links">
        <Zoom>
          <span onClick={() => navigate('/')}>Summarizer</span>
          <span onClick={() => navigate('/bulleter')}>Bulleter</span>
          <span onClick={() => navigate('/custom')}>Custom</span>
          <span>Team</span>
          <span>About</span>
        </Zoom>
      </div>
    </div>
  );
};

export default Navbar;
