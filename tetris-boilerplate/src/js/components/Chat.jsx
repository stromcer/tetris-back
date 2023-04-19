import React from "react";
import { io } from "socket.io-client"
import { useState,useEffect } from "react";

const socket = io('http://localhost:3000')

const Chat = () => {

    const [isConnected, setIsConnected] = useState(true);
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('connect', () => setIsConnected(true));

        socket.on('chat_message', (data) => {
            setMessages(messages => [...messages, data])
        })

        return () => {
            socket.off('connect');
            socket.off('chat_message')
        }

    }, [])

    const sendMessage = () => {
        socket.emit('chat_message', {
            usuario: socket.id,
            mensaje: newMessage
        })
    }

    return(
        <div className="card w-25">
            <h3>{isConnected ? 'Conectado' : 'No conectado'}</h3>
            <ul>{messages.map(mensaje => (
                <li>{mensaje.usuario}: {mensaje.mensaje}</li>
            ))}</ul>
            <input className="bg-dark" type="text" placeholder="Enter your message: " 
                onChange={e => setNewMessage(e.target.value)} />
            <button onClick={sendMessage} type="button" id="send">Send</button>
        </div>
    )
}

export default Chat;