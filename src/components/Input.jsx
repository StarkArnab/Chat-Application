import React from "react";
import Img from "../img/img.png";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Let's start chatting" />
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
