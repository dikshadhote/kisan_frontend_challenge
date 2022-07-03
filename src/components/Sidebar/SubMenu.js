import React from "react";

export default function SubMenu() {
  return (
    <div className="d-flex flex-column grey-border curver-border">
      <div className="d-flex flex-justify-center">
        <h6>Submenu</h6>
      </div>
      <ul className="list-style-none ">
        <li className="pt-1 pb-1 aqua-text-dark font-weight-bold">
          <p className="ml-3"> Home</p>
        </li>
        <li className="pt-1 pb-1  white-text-color aqua-dark-bg  font-weight-bold">
          <p className="ml-3">Examples</p>
        </li>
        <li className=" pt-1 pb-1 aqua-text-dark font-weight-bold">
          <p className="ml-3">Contact</p>
        </li>
        <li className="pt-1 pb-1 aqua-text-dark font-weight-bold">
          <p className="ml-3">About</p>
        </li>
      </ul>
    </div>
  );
}
