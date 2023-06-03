import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import AnswerCard from './AnswerCard'

const ViewSection = () => {
  return (
     <Stack 
    //  p={"10px 20px"}
     
     w={"60%"}
     m={"auto"}
     textAlign={'left'}
     >
        <Text fontWeight={500} mb="10px" fontSize={'18px'} textAlign={"left"}>
        Answer(3)
      </Text>
        <AnswerCard />
        <AnswerCard />
        <AnswerCard />
     </Stack>
  )
}

export default ViewSection