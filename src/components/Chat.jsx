import React from "react";
import Cam from "../img/cam.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>User1</span>
        <div className="chatIcons">
          <img src={Cam} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
