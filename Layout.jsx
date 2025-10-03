import React from 'react'
import Header from './src/componenets/Header'
import Footer from './src/componenets/Footer'
import {Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
