import React from "react";

export default function Location() {
  return (
    <div className="d-flex flex-column grey-light-bg">
      <div className="d-flex flex-justify-center mt-1 mb-1">
        <h6>Or meet me at office</h6>
      </div>
      <img
        src="https://img.freepik.com/free-photo/aerial-view-landscape-city-with-lot-highways-buildings-transportation_181624-10273.jpg?size=626&ext=jpg&ga=GA1.2.788027645.1656830851"
        className="img-map"
      />
      <div className="m-2">
        <p className="mb-xm">ONE MIDTOWN</p>
        <p className="mb-xm">11 Hoi Shing Rdn</p>
        <p className="mb-xm">Tsuen Wa</p>
      </div>
    </div>
  );
}
