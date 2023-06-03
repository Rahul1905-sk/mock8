import axios from "axios"
import { ANS_POST, GET_REQ_QUESTION,  POST_REQ_QUESTION } from "./actiontypes"
import { baseUrl } from "../../components/BaseUrl"




export const postquestion=(ob)=>(dispatch)=>{

   return  axios.post(`${baseUrl}/questions`,ob)
    .then((res)=>{
        dispatch({type:POST_REQ_QUESTION,payload:res.data})
    })
}

export const getquestion=(dispatch)=>{

    axios.get(`${baseUrl}/questions?_limit=5`)
    .then((res)=>{
        dispatch({type:GET_REQ_QUESTION,payload:res.data})
    })
}

export const deletequestion=(id)=>(dispatch)=>{
    
    axios.delete(`${baseUrl}/questions/${id}`)
    
}



export const postanswer=(ob)=>(dispatch)=>{

    return  axios.post(`${baseUrl}/answers`,ob)
     .then((res)=>{
         dispatch({type:ANS_POST,payload:res.data})
     })
 }
 