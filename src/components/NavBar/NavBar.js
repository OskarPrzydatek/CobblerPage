import React from "react";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li key={"services"}><Link to={"/services"}>Services</Link></li>
        <li key={"contact"}><Link to={"/contact"}>Contact</Link></li>
      </ul>
    </nav>
  );
}
