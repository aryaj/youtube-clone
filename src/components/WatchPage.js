import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    console.log("searchParams", searchParams.get("v"))

    return (
        <div className='px-5'>
            <iframe width="800" height="400" src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=SbL2EFTqTEn1q6k-`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
    )
}

export default WatchPage