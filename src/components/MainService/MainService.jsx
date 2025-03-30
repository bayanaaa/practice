import React from "react";
import scss from "./MainService.module.scss";
import { info } from "../../constants/MainService";

function MainService() {
  const cards = info.map(({ img, desc, text }, index) => (
    <div className={scss.eachCard} key={index}>
      <img src={img} alt="" />
      <h1>{desc}</h1>
      <p>{text}</p>
      <article><span>LEARN MORE</span></article>
    </div>
  ));

  return (
    <div className="container">
      <div className={scss.mainService}>
      <section className={scss.upperPart}>
        <div className={scss.titles}>
          <h2>our service</h2>
          <h1>Our Service</h1>
        </div>
        <p>
          We use the latest VR hardware and software to create high-quality VR
          experiences that are accessible and affordable. Our goal is to provide
          exceptional customer service and support, and our team is always
          available to answer any questions and address any concerns you may
          have.
        </p>
      </section>
      <section className={scss.bottomPart}>
        <main>{cards}</main>
      </section>
    </div>
    </div>
  );
}

export default MainService;
