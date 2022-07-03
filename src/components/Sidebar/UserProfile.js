import React from "react";

export default function UserProfile() {
  return (
    <div className="mt-2">
      <div className="orange-light-bg user-img"></div>
      <div className="grey-light-bg user-details">
        <ul className="list-style-none pt-4">
          <li className="pt-1 pb-1 d-flex">
            <p className="ml-3 font-weight-bold"> Name</p>
            <p className="ml-3"> Nomen Nascio</p>
          </li>
          <li className="pt-1 pb-1 d-flex">
            <p className="ml-3 font-weight-bold"> Email</p>
            <p className="ml-3"> Nomen@exampe.com</p>
          </li>
          <li className="pt-1 pb-1 d-flex">
            <p className="ml-3 font-weight-bold"> Phone</p>
            <p className="ml-3"> +852 555 555</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
