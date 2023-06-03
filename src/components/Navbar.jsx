import { Flex} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <Flex height={'5vh'} justifyContent={'space-around'}>
        <Link to={'/login'} >Login</Link>
        <Link to={'/signup'} >Signup</Link>
        <Link to={'/forum'} >Forum</Link>
     </Flex>
  )
}

export default Navbar