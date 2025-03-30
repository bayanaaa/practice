import React, { useEffect, useRef, useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../assets/Header/logo.svg";
import { pages } from "../../constants/Header";
import { Link } from "react-router-dom";
import Navs from "./Navs/Navs";

function Header() {
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  useEffect(() => {
    if (burgerOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [burgerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${scss.content} ${scrolled ? scss.scrolled : ""}`}>
      <div className="container">
      <header className={scss.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav ref={navRef} className={scss.navs}>
        {pages.map((page, index) => (
          <Navs
            key={index}
            title={page.title}
            link={page.link}
            arrow={page.arrow}
            openLink={page.openLink}
            isOpen={open === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </nav>
      <span className={scss.span}>Contact Us</span>
      <p className={scss.burger} onClick={() => setBurgerOpen(!burgerOpen)}>
        <span className={burgerOpen ? scss.opened : ""}></span>
        <span className={burgerOpen ? scss.opened : ""}></span>
        <span className={burgerOpen ? scss.opened : ""}></span>
      </p>
      {burgerOpen && (
        <nav ref={navRef} className={burgerOpen ? scss.navsBurger : scss.navs}>
          {pages.map((page, index) => (
            <Navs
              key={index}
              title={page.title}
              link={page.link}
              arrow={page.arrow}
              openLink={page.openLink}
              isOpen={open === index}
              onToggle={() => handleToggle(index)}
              burgerOpen={burgerOpen}
            />
          ))}
        </nav>
      )}
    </header>
    </div>
    </div>
  );
}

export default Header;
