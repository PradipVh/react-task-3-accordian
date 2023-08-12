import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import TaskPage from '../../Components/TaskPage'

function RouteLayout() {

  return (
    <div>
      <TaskPage/>
      <Outlet />
    </div>
  )
}

export default RouteLayout