import React from "react";
import { SubMenu, UserProfile, MessageForm, Location } from "../index";
export default function Sidebar() {
  return (
    <div className="mt-4">
      <SubMenu />
      <UserProfile />
      <MessageForm />
      <Location />
    </div>
  );
}
