import io from "socket.io-client";
let socket


export const init = () =>{
    console.log(`Connecting...`)


 socket= io( `http://localhost:3000`,{
    transports:["websocket"]
 })

 socket.on("connect", ()=> { console.log("Connected!")})
}

export const sendMessage = (message)=>{
if (socket) socket.emit("new-message",message)

}
export const subscribeChat = (callback) =>{
if (!socket) return
socket.off("receive-message").on("receive-message",(message) =>{

   callback(message)
})

}

export const subcribeInitialMessages = (callback) =>{
if(!socket) return
socket.off("message-list").on("message-list",(messages) =>{
   console.log(`Initial`,messages)
   callback(messages)
})
}