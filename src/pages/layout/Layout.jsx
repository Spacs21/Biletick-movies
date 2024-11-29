import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <div className='bg-black'>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout