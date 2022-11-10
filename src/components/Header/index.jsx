import React from "react";
// Css imports
import "./header.css";

// Components import
import Logo from "../../assets/Ben-Logo.svg";
import NavBar from "../NavBar";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <NavBar />
    </header>
  );
}
