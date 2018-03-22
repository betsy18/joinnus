import React from "react";

const NavItemLink = () => (
  <div className="navbar-nav mr-auto mt-2 mt-lg-0">
    <a className="nav-item nav-link text-white" href="#">
      Home <span className="sr-only">(current)</span>
    </a>
    <a className="nav-item nav-link text-white" href="">
      Taetro
    </a>
    <a className="nav-item nav-link text-white" href="">
      Disabled
    </a>
  </div>
);

export default NavItemLink;
