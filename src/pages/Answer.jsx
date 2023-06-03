import React from 'react'
import QuestionSection from '../components/QuestionSection'
import { Stack } from '@chakra-ui/react'
import PostSection from '../components/PostSection'
import ViewSection from '../components/ViewSection'

const Answer = () => {
  return (
    <Stack bgColor={'#eeeeee'} p={'1rem 3rem'} >
        <QuestionSection />
        <PostSection />
        <ViewSection />
    </Stack>
  )
}

export default Answer