import React from "react";
import SideBar from "./SideBar";
import CatalogRight from "./cards/CatalogRight";

const Catalog = () => {
  return (
    <main className="w-full flex-center-row">
      <section className="main-section-wrapper flex gap-5">
        <SideBar />
        <CatalogRight />
      </section>
    </main>
  );
};

export default Catalog;
