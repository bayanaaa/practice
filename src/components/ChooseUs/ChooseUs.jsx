import React from "react";
import scss from "./ChooseUs.module.scss";
import chooseBg from "../../assets/ChooseUs/chooseBg.svg";
import chooseVr from "../../assets/ChooseUs/chooseVr.svg";
import { info } from "../../constants/ChooseUs";
import Cards from "./Cards/Cards";

function ChooseUs() {
  const cards = info.map((el, index) => <Cards {...el} key={index} />);

  return (
    <div className="container">
      <div className={scss.chooseUs}>
      <section className={scss.leftPart}>
        <span>why choose us</span>
        <h1 className={scss.heading}>
          Why Choose Us for <br />
          Your VR Needs
        </h1>
        <main>{cards}</main>
      </section>
      <section className={scss.rightPart}>
        <img src={chooseBg} alt="mainImg" />
        <div className={scss.placeVr}>
          <aside className={scss.vr}>
            <img src={chooseVr} className={scss.vrImg} alt="video" />
          </aside>
        </div>
      </section>
    </div>
    </div>
  );
}

export default ChooseUs;
