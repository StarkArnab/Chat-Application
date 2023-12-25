import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col justify-between p-[10px] h-screen overflow-auto flex-grow pb-[50px]`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  //   console.log(messages);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      setTimeout(() => {
        scroll.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })}
      </main>
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
