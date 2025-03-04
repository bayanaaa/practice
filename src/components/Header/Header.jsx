import React, { useEffect, useRef, useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../assets/Header/logo.svg";
import { pages } from "../../constants/Header";
import { Link, useLocation } from "react-router-dom";
import Navs from "./Navs/Navs";

function Header() {
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

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
    <header className={`${scss.header} ${scrolled ? scss.scrolled : ""}`}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav ref={navRef}>
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
      <span>Contact Us</span>
    </header>
  );
}

export default Header;
