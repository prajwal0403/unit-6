import React from 'react'
import {Route , Routes}  from "react-router-dom"
import { Add_country } from '../Components/Add_country'
import { Add_city } from '../Components/Add_city'
import { Home } from '../Components/Home'
export const Routing = () => {
  return (
    <div>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/add-country' element={<Add_country/>} />
    <Route path='/add-city' element={<Add_city/>} />
</Routes>
    </div>
  )
}