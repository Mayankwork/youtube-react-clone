import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage'
import { useEffect } from 'react';
import { generate, makeid } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const [ liveMessage,setliveMessage] = useState("");
  const chatMessages = useSelector((store)=>store.chat.messages)
  useEffect(()=>{

    const i = setInterval(()=>{
      //api polling

      dispatch(addMessage({
        name:generate(),
        message:'This is a live comment by user ' + makeid(7),
      }))
    },2000)
    return ()=> clearInterval(i);
  },[]);
  return (
    <>
    <div className='w-full  h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse'>
      {/* <ChatMessage name="Mayank Gupta" message="This is a live comment by user "/> */}
<div>
      { chatMessages.map((c,index)=>{
        return <ChatMessage key={index} name={c.name} message={c.message}/>
      })  }
      </div>
      
    
    
  </div>
  <form onSubmit={(e)=>{
    e.preventDefault()
    console.log(liveMessage);
    dispatch(addMessage({
      name:'Mayank Gupta',
      message:liveMessage,
    }))
    setliveMessage('');
  }} className='w-full p-2 ml-2 border border-black'>
    <input className='px-2 w-96' type="text border-black" value={liveMessage} onChange={(e)=>{
       setliveMessage(e.target.value);
    }} />
    <button className='px-2 mx-2 bg-green-100'>Send</button>
  </form>
  </>
  )
}

export default LiveChat