import React, { useState } from "react";
import scss from "./Start.module.scss";
import playBottom from "../../assets/Start/playBottom.svg";
import line from "../../assets/Start/Line.svg";

function Start() {
  const [click, setClick] = useState(false);

  return (
    <div className={scss.start}>
      <span>How to get started?</span>
      <h1>
        Bringing Your Virtual Reality <br /> Dreams to Life{" "}
      </h1>

      {click != true ? (
        <main onClick={() => setClick(true)}>
          <article>
            <p>VR Service</p>
            <h2>How to get started?</h2>
          </article>
          <div className={scss.play}>
            <img src={playBottom} alt="" />
            <img src={line} alt="" />
          </div>
        </main>
      ) : (
        <iframe
          className={scss.youtube}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/y1Mn5zCvLrU?si=3Zgcsd6rxYiLy2wF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
      <button>Get started</button>
    </div>
  );
}

export default Start;
