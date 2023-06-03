import { Box, Button, Input, Select, SimpleGrid, Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../redux/authredux/action'
import { getquestion, postquestion } from '../redux/forumredux/action'
import Forumcard from '../components/Forumcard'


const init={
  username:"",
  title:"",
  description:"",
  language:"",
  date:"",
  upvotes:0,
  answers:0,

}



const Forum1 = () => {

const [question,setquestion]=useState(false)
const [data3,setdata3]=useState([])

const [page,setpage]=useState(1)
    const dispatch=useDispatch()
    const [data,setdata]=useState({})
    const state=useSelector((state)=>state.AuthReducer.user)
    let data2=useSelector((state)=>state.forumReducer.questions)   
   
    
    useEffect(()=>{
    dispatch(signin)
    dispatch(getquestion(page))
   
    },[page])



    const handleChange=(e)=>{
        const {name,value}=e.target
      setdata({...data,[name]:value})
      
      }

      let display=""
      if(question===true){
        display="block"
      } else{
        display="none"
      }   
console.log(question)
      
      const handlesubmit=(e)=>{
      e.preventDefault()
     dispatch(postquestion(data)).then(()=>{
      dispatch(signin)
     
     })


    
    }
    const handlefilter=(e)=>{
     let newdata= data2?.filter((item)=>item.language===e.target.value)
     setdata3(newdata)
    }
    let val=[]
if(data3.length>0){
  val=data3
}else{
  val=data2
}


  return (
    <Box width="50%" m="auto">


<Select placeholder='Filter by language' onChange={handlefilter}>
  <option value="Javascript">Javascript</option>
  <option value="Java">Java</option>
  <option value="Python">Python</option>
  <option value="other">other</option>
</Select>

    <Button colorScheme='green' onClick={()=>setquestion(!question)} >Ask a Question</Button>
    
     <form  mt="10%" style={{display:display}} onSubmit={handlesubmit}>
        <Input name="username" placeholder='Enter Your UserName' onChange={handleChange} value={state[0]?.username}/>
       
        <Input name="title"   placeholder='Enter the Title'  onChange={handleChange}/>
        <Textarea name="description"  placeholder='Enter the Description'  onChange={handleChange}/>
        <Select name="language" placeholder='Select Language' onChange={handleChange} >

<option value="Javascript">Javascript</option>
<option value="Python" >Python</option>
<option value="Java">Java</option>
<option value="other">other</option>

       </Select>
       <Input type='date' name="date" onChange={handleChange}/>
       <Input type='number' name="upvotes" placeholder='Enter Votes' onChange={handleChange}/>   
       <Input type='number' name="answers" placeholder='Enter expected answers'  onChange={handleChange}/>           
        <Button onClick={()=>setquestion(false)}  type="submit" bg="black" color="white">POST</Button>
      </form>

<Box>


{  val?.map((item)=>(

<Forumcard key={item.id+1} {...item} avatar={state[0]?.avatar} username={state[0]?.username} />
))}
</Box>
<Box mt="5%">
<Button bg={"red"}  onClick={()=>setpage(page-1)}>Prev</Button>
<Text as={"span"} >{page}</Text>
<Button bg="yellow" onClick={()=>setpage(page+1)}>Next</Button></Box>
    </Box>
  )
}

export default Forum1