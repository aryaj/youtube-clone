import React from 'react'

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex py-2'>
            <img className='w-8 h-8' alt="user" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment