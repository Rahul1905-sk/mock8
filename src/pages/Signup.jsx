import { Box, Button, FormControl, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../redux/authredux/action'
import { useNavigate } from 'react-router-dom'

const initState={
  username:"",
  password:"",
  avatar:"",
  email:""
}

const Signup = () => {

const [data,setdata]=useState(initState)

const dispatch=useDispatch()

// const state=useSelector((state)=>state)
// console.log(state)
const navigate=useNavigate()


const handleChange=(e)=>{
  const {name,value}=e.target
setdata({...data,[name]:value})

}

const handlesubmit=(e)=>{
e.preventDefault()
console.log(data)
dispatch(signup(data))
navigate("./login")

}

  return (
    <Box w="50%" margin={"auto"}>
      <form  mt="10%" onSubmit={handlesubmit}>
        <Input name="username" placeholder='Enter Your UserName' onChange={handleChange} value={data.username}/>
        <Input name="avatar" placeholder='Your Avatar' onChange={handleChange} value={data.avatar}/>
 
        <Input name="email" type="email" placeholder='Enter Your Email' value={data.email} onChange={handleChange}/>
        <Input name="password" type="password" placeholder='Enter Your Password' value={data.password} onChange={handleChange}/>
        <Button type="submit" bg="black" color="white">SignUp</Button>
      </form>
    </Box>
  )
}

export default Signup
