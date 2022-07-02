import React from "react";
import { Footer, Navbar, Header, HambergerMenu, Article } from "../components";
import { useSide } from "../context/sidebar-context";
export default function Home() {
  const { showSidebar } = useSide();

  return (
    <div className="d-flex flex-column">
      <div className="pos-relative">
        <Navbar />
        {showSidebar ? <HambergerMenu /> : ""}
      </div>
      <Header />
      <div className="article-container  content-container">
        <section>
          <Article />
        </section>
        <aside className="article"></aside>
      </div>
      <Footer />
    </div>
  );
}
