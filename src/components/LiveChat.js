import React, { useEffect, useReducer, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, removeMessage } from '../utils/chatSlice';
import { generateRandomeName, generateRandomeString } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.message)

    useEffect(() => {
        const timerId = setInterval(() => {
            // API Polling
            console.log("api polling chatMessag", chatMessages);
            dispatch(addMessage({ name: generateRandomeName(), message: generateRandomeString(20) }))

        }, 2000);

        return (() => {
            clearInterval(timerId);
        })

    }, []);

    const liveChangeFormHandler = (e) => {
        e.preventDefault();
        dispatch(addMessage({ name: 'Ajay', message: liveMessage }));
        setLiveMessage('');
    }

    console.log("chatMessages", chatMessages)
    return (
        <>
            <div className='flex flex-col' >
                <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                    <div >
                        {chatMessages.map((chat, index) => {
                            return <ChatMessage key={index} name={chat.name} message={chat.message} />
                        })}
                        {/*  <ChatMessage key={'1'} name={'ajay1'} message={'message1'} />
                        <ChatMessage key={'2'} name={'ajay2'} message={'message2'} />
                        <ChatMessage key={'3'} name={'ajay3'} message={'message3'} />
                        <ChatMessage key={'4'} name={'ajay4'} message={'message3'} />
                        <ChatMessage key={'4'} name={'ajay5'} message={'message3'} /> */}
                    </div>
                </div>
                <form className='w-full flex ml-2 mt-2 h-10 gap-2' onSubmit={(e) => liveChangeFormHandler(e)}>
                    <input className=' w-4/5 border border-black p-2' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                    <button className='px-3 border border-black  rounded-md bg-emerald-100'
                    >Submit</button>
                </form>
            </div>
        </>
    )
}

export default LiveChat