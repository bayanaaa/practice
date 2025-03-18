import React from 'react';
import { Link } from 'react-router-dom';
import scss from '../Header.module.scss';

function Navs({ title, link, arrow, openLink, isOpen, onToggle, burgerOpen }) {
  return (
    <div className={`${scss.navs} ${burgerOpen ? scss.burgerActive : ''}`}>
      <div className={scss.withArrow}>
      <Link className={scss.pages} to={link}>
        {title}
      </Link>

      {arrow && (
        <svg
          className={isOpen ? scss.arrowRotate : scss.arrow}
          onClick={onToggle}
          width="15"
          height="20"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 7.68789L3 4.68789L3.5375 4.15039L6 6.62539L8.4625 4.16289L9 4.70039L6 7.68789Z"
            fill={isOpen ? "white" : "#cbc2c2"}
          />
        </svg>
      )}
      </div>

      {isOpen && openLink && (
        <div className={scss.arrowClick}>
          {openLink.map(({ text, href }, index) => (
            <Link key={index} className={scss.openLinks} to={href}>
              {text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


export default Navs;
