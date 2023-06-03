import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Forum from '../pages/Forum'


const Allroutes = () => {
  return (
 
      

<Routes>
    <Route path="/login" element={<Signin/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/forum" element={<Forum/>}  />
</Routes>

    
  )
}

export default Allroutes
