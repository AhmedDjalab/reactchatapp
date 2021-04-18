
import React from "react"
const chatContext = React.createContext({
  name : "" ,
  room:"" , 
  avatar : "", 
});
chatContext.displayName = "Chat Context";
export default chatContext;