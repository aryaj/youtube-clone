import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {

  return (
    <div className='col-span-11' >
      <ButtonList />
      <Outlet />
    </div>
  )
}

export default MainContainer