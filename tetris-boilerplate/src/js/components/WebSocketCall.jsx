import React, { useEffect, useState } from "react";
import "../styles/chat.css"

const WebSocketCall = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
      return handleSubmit()
      };
  };

  const handleText = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
  };

  const handleSubmit = () => {
    if (!message) {
      return;
    }
    socket.emit("data", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("data", (data) => {
      setMessages([...messages, data.data]);
    }); 
    return () => {
      socket.off("data", () => {
        console.log("data event was removed");
      });
    };
  }, [socket, messages]);

  return (
    <div className="container-chat nes-container is-dark">
      <div className="input-button-styles">
        <ul className="text-danger" id="chat-box">
          {messages.map((message, ind) => {
            return <li key={ind}>{message}</li>;
          })}
        </ul>
        <input className="input-chat-styles" type="text" value={message} onChange={handleText} onKeyDown={handleKeyDown} />
        <button className="bg-primary" type="button" onClick={handleSubmit}>ENVIAR</button>
      </div>
    </div>
  );
}

export default WebSocketCall;