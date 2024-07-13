import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpened = useSelector(store => store.app.isMenuOpened);
    // Early return pattern
    if (!isMenuOpened) return null;

    return (
        <div className='p-5 shadow col-span-1'>
            <div className='pb-5'>

                <ul className=''>
                    <li className='py-2'><Link to={"/"}>Home</Link></li>
                    <li className='py-2'>Sports</li>
                    <li className='py-2'>Gaming</li>
                    <li className='py-2'>Movies</li>
                </ul>
            </div>
            <div className='pb-5'>
                <h1 className='font-bold'>Subscription</h1>
                <ul className=''>
                    <li className='py-2'>Music</li>
                    <li className='py-2'>Sports</li>
                    <li className='py-2'>Gaming</li>
                    <li className='py-2'>Movies</li>
                </ul>
            </div>
            <div className='pb-5'>
                <h1 className='font-bold'>Watch Later</h1>
                <ul className=''>
                    <li className='py-2'>Music</li>
                    <li className='py-2'>Sports</li>
                    <li className='py-2'>Gaming</li>
                    <li className='py-2'>Movies</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar