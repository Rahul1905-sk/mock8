import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Forumcard = ({username,avatar,title,description,date,upvotes,language,answers,id}) => {

    
  return (
    <Box mt="2%"  border={'1px solid black'} p={'5px 10px'} >
      <Flex gap={"5%"}>
      <Box>
<Image width="100px" src={avatar}/>
<Text>{username}</Text>
</Box>

<Box>
    <Text fontWeight={"600"}>{title}</Text>
    <Flex justifyContent={'space-evenly'}>
        <Text fontWeight={"500"}>{language}</Text>
        <Text>{date}</Text>
        <Text>{answers}</Text>
    </Flex>
</Box>

<Text>{upvotes}</Text>

      </Flex>
<Button>Edit</Button>
<Button >Delete</Button>

    </Box>
  )
}

export default Forumcard