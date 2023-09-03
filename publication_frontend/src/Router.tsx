import React from 'react'
import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Download from './Download'
import NotFound from './NotFound'
const Router = () => {
  return (
    <Routers>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/testwork' element={<Download/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </Routers>
  )
}

export default Router