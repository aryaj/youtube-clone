import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center mb-2'>
            <img className="h-8" alt='user' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' />
            <span className='font-bold mr-2'>{name} : </span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage