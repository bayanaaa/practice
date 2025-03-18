import React from "react";
import scss from "./Footer.module.scss";
import { media, footerArr } from "../../constants/Footer";
import logo from "../../assets/Header/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  const socials = media.map((el, index) => (
    <img key={index} src={el} alt="socialPages" />
  ));

  const infos = footerArr.map(({ title, info }, index) => (
    <div className={scss.footerInfo} key={index}>
      <h1>{title}</h1>
      {info.map((el, index) => (
        <article key={index}>
          {el.img && <img src={el.img} alt="photo" />}
          {el.link ? (
            <Link className={scss.text} to={el.link}>
              {el.desc}
            </Link>
          ) : (
            <p className={scss.text}>{el.desc}</p>
          )}
        </article>
      ))}
    </div>
  ));

  return (
    <div className={scss.footer}>
      <footer>
        <section className={scss.firstLine}>
          <img className={scss.logo} src={logo} alt="" />
          <div className={scss.socialPages}>{socials}</div>
        </section>
        <section className={scss.infosPart}>{infos}</section>
      </footer>
      <span className={scss.copyright}>
        © Copyright 2023, All Rights Reserved
      </span>
    </div>
  );
}

export default Footer;
