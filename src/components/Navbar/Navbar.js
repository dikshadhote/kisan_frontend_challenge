import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSide } from "../../context/sidebar-context";

export default function NavBar() {
  const { toggleSidebar } = useSide();
  return (
    <nav className="black-bg navbar">
      <div className="d-flex flex-justify-space-between align-items-center content-container ">
        <GiHamburgerMenu
          className=" hamburger white-text"
          onClick={() => toggleSidebar()}
        />
        <h4 className="aqua-text-dark">OYODO</h4>
        <ul className="list-style-none d-flex nav-menu">
          <li className="ml-3 black-dark-bg white-text-color p-2 aqua-border-bottom font-weight-bold">
            HOME
          </li>
          <li className="ml-3 p-2  grey-text-color font-weight-bold">
            DAPIBUS
          </li>
          <li className="ml-3 p-2  grey-text-color font-weight-bold">
            ULTRICIES
          </li>
          <li className="ml-3 p-2  grey-text-color font-weight-bold">
            BIBENDUM
          </li>
          <li className="ml-3 p-2  grey-text-color font-weight-bold">MAGNA</li>
        </ul>
      </div>
    </nav>
  );
}
