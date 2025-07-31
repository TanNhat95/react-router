import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Outlet />
    </div>
  )
}

export default AuthLayout
