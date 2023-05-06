import React, { useMemo }  from "react";
import "../styles/chat.css"
import useSocket from "../hooks/useSocket";
import useFormInputs from "../hooks/useFormInputs";

const Chat = ({ room }) => {


  const chat_room = useMemo(() => `chat_${room}`, [room]);

  const { userTextInputs, handleTextChangeInputs} = useFormInputs();
  const { messages, sendMessage } = useSocket(chat_room); 

  
  
  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
      return handleSubmit()
      }
  }

  const handleSubmit = () => {
    if (!userTextInputs.message) {
      return;
    }
    handleTextChangeInputs({target:{name:"message", value:""}})
    //socket.emit("data", userTextInputs.message);
    sendMessage({"room":chat_room, "data": `user : ${userTextInputs.message}`});
  };


  return (
    <div className="container-chat nes-container is-dark">
      <div className="input-button-styles">
        <ul className="text-danger" id="chat-box">
          {messages.map((message, ind) => {
            return <li key={ind}>{message}</li>;
          })}
        </ul>
        <input className="input-chat-styles" type="text" name="message" value={userTextInputs.message} onChange={handleTextChangeInputs} onKeyDown={handleKeyDown} />
        <button className="bg-primary" type="button" onClick={handleSubmit}>ENVIAR</button>
      </div>
    </div>
  );
}

export default Chat;