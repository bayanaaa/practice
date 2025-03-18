import React from "react";
import scss from "./Main.module.scss";
import vrImg from "../../assets/Main/vrImg.svg";
import happyClients from "../../assets/Main/happyClients.svg";
import play from "../../assets/Main/play.svg";
import video from "../../assets/Main/video.svg";
import mainBg from "../../assets/Main/mainBg.svg";
import { arr } from "../../constants/Main";

function Main() {
  const cards = arr.map(({ img, title, text }, index) => (
    <div className={scss.eachCard} key={index}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  ));

  return (
    <main className={scss.main}>
      <section className={scss.upperPart}>
        <div className={scss.firstSection}>
          <article>
            <h1>
              Immerse Yourself <br /> in Virtual Reality
            </h1>
            <p>
              Experience Unforgettable Events in VR. Bring your events to <br />{" "}
              life like never before with our VR services
            </p>
            <button>discover more</button>
          </article>
          <div className={scss.clients}>
            <img src={happyClients} alt="" className={scss.happyClients} />
            <div className={scss.div}>
              <img src={video} className={scss.video} alt="video" />
            </div>
          </div>
        </div>

        <img src={vrImg} className={scss.vrImg} alt="VrImg" />
      </section>
      <section className={scss.bottomPart}>{cards}</section>
      <img src={mainBg} className={scss.mainBg} alt="mainBg" />
    </main>
  );
}

export default Main;
