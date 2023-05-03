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

  useEffect(() => {
    if (connectionStatus === true) {
      const socket = io("84.121.62.4:3245/");

      setSocketInstance(socket);

      socket.on("connect", (data) => {
        console.log(data);
      });

      setLoading(false);

      socket.on("disconnect", (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
    }
  }, [connectionStatus]);

  return (
    <div className="Chat">
      {!connectionStatus ? (
        <button onClick={handleClick}>turn chat on</button>
      ) : (
        <>
          <button onClick={handleClick}>turn chat off</button>
          <div className="line">
            {!loading && <WebSocketCall socket={socketInstance} />}
          </div>
        </>
      )}
    </div>
  );
}

export default Chat;
