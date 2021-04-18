import React, { useState } from 'react';
import { Link } from "react-router-dom";
import chatContext from '../../context/chatContext';
import avatar1 from '../../icons/avatar.png' ; 
import avatar2 from '../../icons/avatar1.png' ; 
import avatar3 from '../../icons/avatar2.png' ; 
import avatar4 from '../../icons/avatar3.png' ; 
import avatar5 from '../../icons/avatar4.png' ; 
import avatar6 from '../../icons/avatar5.png' ; 
import Chat from '../Chat/Chat';
import './Join.css';
const thumbnail_arry = [
avatar1,avatar2,avatar3,avatar4,avatar5,avatar6
] ; 
export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [avatar, setAvatar] = useState(thumbnail_arry[0]);
 
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>

        <div className="thum_container">
   
       
       {thumbnail_arry.map((e)=> {
          return  <div className="thumbnail_container" >
      <img src={e} width="20"></img>
        <input type="radio" name="thumbnail"  onClick={()=>{
          setAvatar(e);
        }}/> 
        </div>
        })}
       

  
   
      
        </div>
      
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} 
            to={{ pathname: '/chat', state: {name : name,avatar : avatar,room :room}}} 
         
                 >
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>

      
      </div>
    </div>
  );
}
