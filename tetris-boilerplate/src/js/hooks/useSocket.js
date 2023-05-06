import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = (room) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!room) return;

    const socketInfo = io('84.121.62.4:3245/');
    
    socketInfo.on("connect", () => {
      socketInfo.emit('join', room);
      console.log("Conectado", socketInfo)
    });

    setSocket(socketInfo);
    return () => socketInfo.close();
  }, [room]);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (message) => {
      console.log("mensaje recibido", message);
      setMessages((prevMessages) => [...prevMessages, message.data]);
    };
 
    socket.on('data', handleMessage);

    return () => {
      socket.off('data', handleMessage);
    };
  }, [socket]);

  const sendMessage = (message) => {
    console.log("mensaje a enviar", message);
    console.log("Mensajes en el hook", messages);
    if (!socket) return;
    socket.emit('data', message);
  };

  return { socket, messages, sendMessage };
};

export default useSocket;