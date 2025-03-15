import React from "react";
import scss from "../Articles.module.scss";
import SlickSlider from "react-slick"; // <-- Импортируем react-slick под другим именем
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import arrow from "../../../assets/Article/arrow.svg";
import { media } from "../../../constants/Slider";

function ArticleSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
      };
    


  const slides = media.map((el, index) => (
    <main key={index}>
      <span>VR Games</span>
      <div className={scss.bottom}>
        <h2>{el}</h2>
        <Link to="/recentArticle">
          <img src={arrow} className={scss.arrow} alt="" />
        </Link>
      </div>
    </main>
  ));
  return (
    <div className={scss.slider}>
      <h1>Popular Article</h1>
      <SlickSlider {...settings}>{slides}</SlickSlider>
    </div>
  );
}

export default ArticleSlider;
