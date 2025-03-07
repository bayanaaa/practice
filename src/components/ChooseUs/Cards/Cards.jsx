import React, { useState } from "react";
import scss from "../ChooseUs.module.scss";
import arrow from "../../../assets/Header/arrow.svg";

function Cards({ title, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={scss.questions}>
      <article className={scss.questionTitle} onClick={() => setOpen(!open)}>
        <h1>{title}</h1>
        <img src={arrow} alt="arrowDown" className={!open ? scss.rotate : ""} />
      </article>
      <p className={open ? scss.open : `${scss.close} ${scss.hide}`}>
        {answer}
      </p>
    </div>
  );
}

export default Cards;
