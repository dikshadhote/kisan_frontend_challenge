import React from "react";

export default function NavBar() {
  return (
    <nav className="d-flex flex-justify-around align-items-center p-1 black-bg ">
      <h4 className="aqua-text-dark">OYODO</h4>
      <ul className="list-style-none d-flex">
        <li className="ml-3  grey-text-color font-weight-bold">HOME</li>
        <li className="ml-3  grey-text-color font-weight-bold">DAPIBUS</li>
        <li className="ml-3  grey-text-color font-weight-bold">ULTRICIES</li>
        <li className="ml-3  grey-text-color font-weight-bold">BIBENDUM</li>
        <li className="ml-3  grey-text-color font-weight-bold">MAGNA</li>
      </ul>
    </nav>
  );
}
