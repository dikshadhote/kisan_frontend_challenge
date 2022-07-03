import React from "react";
import SubMenu from "./SubMenu";
import UserProfile from "./UserProfile";
import MessageForm from "./MessageForm";
export default function Sidebar() {
  return (
    <div className="mt-4">
      <SubMenu />
      <UserProfile />
      <MessageForm />
      <div className="d-flex flex-column">
        <div className="d-flexflex-justify-center">
          <h6>Or meet me at office</h6>
        </div>
        <img />
        <address>ONE MIDTOWN, 11 Hoi Shing Rd,Tsuen Wan</address>
      </div>
    </div>
  );
}
