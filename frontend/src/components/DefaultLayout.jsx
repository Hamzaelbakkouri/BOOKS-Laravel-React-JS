import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
      <div>
          deafault
      <Outlet/>
    </div>
  )
}

export default DefaultLayout
