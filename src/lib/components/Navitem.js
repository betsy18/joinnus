import React from "react";
import NavItemLink from "./Navitemlink";
import NavItemForm from "./Navitemform";

const Navitem = () => (
  <div className="">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
      <NavItemLink />
      <NavItemForm />
    </div>

  </div>
);

export default Navitem;
