import React from "react";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to={"/services"}>Services</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
      </ul>
    </nav>
  );
}
