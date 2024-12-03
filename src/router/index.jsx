import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
import Layout from '../pages/layout/Layout'
import Error from '../components/error/Error'
import Detail from '../pages/detail/Detail'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/all' element={<About/>}/>
            <Route path='/movie/:id' element={<Detail/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
    </Routes>
  )
}

export default Router