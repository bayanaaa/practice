import React from "react";
import scss from "./Articles.module.scss";
import { Link } from "react-router-dom";
import ArticleSlider from "./ArticleSlider/ArticleSlider";
import arrow from "../../assets/Article/arrow.svg";
import { data } from "../../constants/Slider";
import "overlayscrollbars/styles/overlayscrollbars.css";

function Articles() {
  let recent = data.map(({ img, title, desc }, index) => (
    <article key={index}>
      <div className={scss.recentImg}>
        <img src={img} alt="" />
      </div>
      <aside>
        <p>{title}</p>
        <span>{desc}</span>
      </aside>
      <Link to="/recentArticle" className={scss.btn}>
        <img src={arrow} alt="arrow" />
      </Link>
    </article>
  ));

  return (
    <div className={scss.article}>
      <span className={scss.heading}>OUR ARTICLES</span>
      <div className={scss.top}>
        <h1>Stay Up-to-Date with Our VR Insights</h1>
        <Link className={scss.btn} to="/recentArticles">
          See all
        </Link>
      </div>
      <main className={scss.mainBody}>
        <ArticleSlider />
        <div className={scss.sideBar}>
          <h1>Recent Article</h1>
          <main className={scss.recentMain}>{recent}</main>
        </div>
      </main>
    </div>
  );
}

export default Articles;
