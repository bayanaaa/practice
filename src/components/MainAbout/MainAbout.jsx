import React from "react";
import scss from "./MainAbout.module.scss";
import mainAboutImg from "../../assets/MainAbout/mainAboutImg.svg";
import vr from "../../assets/MainAbout/vr.svg";
import play from "../../assets/Main/play.svg";
import { arr } from "../../constants/MainAbout";

function MainAbout() {
  const texts = arr.map(({ img, title }, index) => (
    <div className={scss.texts} key={index}>
      <img src={img} alt="" />
      <span>{title}</span>
    </div>
  ));

  return (
    <div className={scss.mainAbout}>
      <img src={mainAboutImg} className={scss.mainImg} alt="" />
      <aside className={scss.vr}>
        <div className={scss.div}>
          <img src={vr} className={scss.vrImg} alt="video" />
        </div>
        <img src={play} className={scss.playBtn} alt="playBtn" />
      </aside>
      <article className={scss.rightPart}>
        <h2>About Us</h2>
        <h1>
          Bring your events to life like never before with our VR services.
        </h1>
        <p>
          VRNas is a leading provider of VR services for education,
          entertainment, architecture, and events. Our mission is to bring the
          power of virtual reality to everyone, allowing them to explore new
          worlds, learn in new ways, and experience events in a whole new light.
        </p>
        <main>{texts}</main>
        <span className={scss.btnRead}>Read more</span>
      </article>
    </div>
  );
}

export default MainAbout;
