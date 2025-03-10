import React from "react";
import scss from "./Pricing.module.scss";
import cloud from "../../assets/Start/cloud.svg";
import { arr } from "../../constants/Pricing";

function Pricing() {
  const pricings = arr.map(({ text, title }, index) => (
    <div className={scss.infos} key={index}>
      <img src={cloud} className={scss.cloudImg} alt="" />
      <article>
        <h1>{title}</h1>
        <p>{text}</p>
      </article>
    </div>
  ));

  return (
    <div className={scss.pricing}>
      <span>our pricing</span>
      <h1>Affordable VR Services for Everyone</h1>
      <p>
        At VRNas, we believe that everyone should have access to the benefits of
        VR. That's <br />
        why we offer a range of pricing options to meet the needs of any budget.
      </p>
      <main>{pricings}</main>
      <aside>
        <p className={scss.start}> Start from</p>
        <h1>$99</h1>
        <button>Get started</button>
        <p>30 Days Moneyback Guarantee</p>
      </aside>
    </div>
  );
}

export default Pricing;
