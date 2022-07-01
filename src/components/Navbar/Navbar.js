import React from "react";

export default function NavBar() {
  return (
    <nav className="d-flex flex-justify-around align-items-center">
      <h3>OYODO</h3>
      <ul className="list-style-none d-flex">
        <li className="ml-1">HOME</li>
        <li className="ml-1">DAPIBUS</li>
        <li className="ml-1">ULTRICIES</li>
        <li className="ml-1">BIBENDUM</li>
        <li className="ml-1">MAGNA</li>
      </ul>
    </nav>
  );
}
