import WebSocketCall from "./WebSocketCall";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const Chat = () => {
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState(true);

  const handleClick = () => {
    if (connectionStatus === false) {
      setConnectionStatus(true);
    } else {
      setConnectionStatus(false);
    }
  };


  return (
    <div className="Chat">
      <div className="line">
            {loading && <WebSocketCall socket={socketInstance} />}
      </div>
    </div>

  );
}

export default Chat;