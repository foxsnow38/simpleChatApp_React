import React, { useState } from 'react'
import { useChat } from '../context/ChatContext'
import { sendMessage, subcribeInitialMessages, subscribeChat } from '../context/SocketApi'
import styles from "./styles.module.css"
function ChatForm() {

  const [message,setMessage] = useState()
  const {setMessages} = useChat()


const handleSubmit = (e) => {
e.preventDefault()
setMessages((prevState) => [...prevState,{ message,fromMe:true}])
sendMessage(message)

console.log(message)

setMessage(``)

}

  return (
    <div className={styles.chatForm}>

<form onSubmit={handleSubmit} >

  <input className={styles.textInput}  value={message} onChange={(e) => setMessage(e.target.value) } />
</form>


    </div>
  )
}

export default ChatForm