import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import "../../lib/style/header.css";

const Header = () => (
  <header className="header">
    <Logo />
    <Navbar />
  </header>
);

export default Header;
