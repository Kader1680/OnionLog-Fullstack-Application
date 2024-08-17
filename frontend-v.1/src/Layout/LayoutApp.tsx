import React from 'react'
import Header from '../pages/header/Header'
import { Outlet } from 'react-router'

const LayoutApp = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default LayoutApp