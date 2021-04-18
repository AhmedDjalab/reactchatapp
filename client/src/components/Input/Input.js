import React from 'react';
import 'emoji-mart/css/emoji-mart.css'

import './Input.css';
import { useState } from 'react';
import {Picker} from 'emoji-mart';


const Input = ({ setMessage, sendMessage, message }) => 

{

  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);

  let emojiPicker;
  if (showEmoji) {
    
    emojiPicker = (
      <div className="container_of_emoji">

     
      
      <Picker
      title="Pick your emoji…"
      emoji="point_up"
      onSelect={emoji => {
      console.log("rrrgrgrg" , emoji)
        setMessage(message + emoji.native)
      
      }}
    />
   
    </div>
      

    );
  }

  function triggerPicker(event) {
    event.preventDefault();
    setShowEmoji(!showEmoji);
  }

return <div>
 
 

<form className="form"> 
 
       
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
   
  
      <span role="img" aria-label="" style={{margin: "auto 20px " ,
       fontSize:"20px" ,
       color:"blue" }} onClick={triggerPicker}>
       🙂 
       </span>
      
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button> 
  </form>
  {emojiPicker}

  </div>
}

export default Input;