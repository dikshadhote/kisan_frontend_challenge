import React from "react";
import {
  Footer,
  Navbar,
  Header,
  HambergerMenu,
  Article,
  HorizontalCard,
  VerticalCard,
  Sidebar,
} from "../components";
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
          <HorizontalCard />
        </section>
        <aside className="article">
          <Sidebar />
        </aside>
      </div>
      <VerticalCard />

      <Footer />
    </div>
  );
}
