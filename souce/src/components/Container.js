import React, { useEffect } from 'react'
import ChatList from "./ChatList"
import ChatForm from "./ChatForm"
import { init ,subscribeChat, subcribeInitialMessages} from '../context/SocketApi'
import { useChat } from '../context/ChatContext'
function Container() {
  const data = useChat()
  useEffect(()=>{
 
    init()
    // subcribeInitialMessages((messages)=>data.setMessages(messages))
    subscribeChat((e)=>data.setMessages((prevState)=> [...prevState,{message:e}]))

   

  },[])
  
  return (
<>
<ChatList/>
<ChatForm/>
</>
  )
}

export default Container