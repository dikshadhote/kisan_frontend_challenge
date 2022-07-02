import React from "react";
import { Footer, Navbar, Header, HambergerMenu } from "../components";
import { useSide } from "../context/sidebar-context";
export default function Home() {
  const { showSidebar } = useSide();

  return (
    <div>
      <div className="pos-relative">
        <Navbar />
        {showSidebar ? <HambergerMenu /> : ""}
      </div>

      <Header />
      <Footer />
    </div>
  );
}
