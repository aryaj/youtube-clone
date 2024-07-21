import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  const [marginTop, setMarginTop] = useState(0);
  useEffect(() => {
    let head = document.getElementById('headContainer');
    let rect = head.getBoundingClientRect();
    setMarginTop(rect.height)
  }, [])


  return (
    <div>
      <Head />
      <div className='flex' style={{ marginTop: marginTop }}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Body