import React from 'react'
import Button from './Button'

const list = ['All', 'Cricket', 'News', 'Cooking', 'Socker', 'Live', 'Cricket', 'News', 'Cooking']

const ButtonList = () => {
    return (
        <div className='flex'>
            {
                list.map(btn => <Button name={btn} />)
            }

        </div>
    )
}

export default ButtonList