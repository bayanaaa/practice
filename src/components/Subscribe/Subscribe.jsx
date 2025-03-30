import React from "react";
import scss from "./Subscribe.module.scss";
import send from "../../assets/Subscribe/Send.svg";
import message from "../../assets/Subscribe/Message.svg";

function Subscribe() {
  return (
    <div className="container">
      <div className={scss.subscribe}>
      <h1>Subscribe to our newsletter for latest updates</h1>
      <form>
        <img src={message} alt="" />
        <input type="text" placeholder="Enter your email " />
        <button type="submit">
          <img src={send} alt="" />
        </button>
      </form>
    </div>
    </div>
  );
}

export default Subscribe;
