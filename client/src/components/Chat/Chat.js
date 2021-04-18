import { useState, useEffect , useContext } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';
import chatContext from "../../context/chatContext";

const ENDPOINT = 'https://chat-react-time.herokuapp.com/';

let socket;

const Chat = (props) => {
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  // const [avatar, setAvatar] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { name, room ,avatar} =  props.location.state;

  useEffect(() => {

    socket = io(ENDPOINT ,  {
      withCredentials: true,
      extraHeaders: {
        "Access-Control-Allow-Origin": "*"
      }
    });

    // setRoom(room);
    // setName(name)
    // setAvatar(avatar) ; 
    socket.emit('join', { name, room , avatar }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} avatar={avatar}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;
