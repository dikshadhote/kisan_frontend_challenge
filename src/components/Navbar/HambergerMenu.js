import React from "react";

export default function HambergerMenu() {
  return (
    <div className="d-flex flex-column black-bg p-1 hamberger-menu">
      <ul className="list-style-none">
        <li className="p-1 grey-text-color font-weight-bold">HOME</li>
        <li className="p-1 grey-text-color font-weight-bold">DAPIBUS</li>
        <li className="p-1 grey-text-color font-weight-bold">ULTRICIES</li>
        <li className="p-1  grey-text-color font-weight-bold">BIBENDUM</li>
        <li className="p-1  grey-text-color font-weight-bold">MAGNA</li>
      </ul>
    </div>
  );
}
