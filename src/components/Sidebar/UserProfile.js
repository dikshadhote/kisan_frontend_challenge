import React from "react";

export default function UserProfile() {
  return (
    <div className="mt-2">
      <div className="pos-relative">
        <img
          className="user-img"
          src="https://img.freepik.com/free-photo/skyscraper-path-speedway-building-bund-pearl_1417-883.jpg?size=626&ext=jpg&ga=GA1.2.788027645.1656830851"
          alt="banner"
        />
        <img
          src="https://www.w3schools.com/w3images/avatar6.png"
          class="avatar avatar-sm img-badge"
          alt="Avatar"
        />
      </div>

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
