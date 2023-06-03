import axios from "axios"
import { SIGNIN_REQ_SUCCESS,  SIGNUP_REQ_SUCCESS } from "./actiontypes"
import { baseUrl } from "../../components/BaseUrl"


export const signup=(ob)=>(dispatch)=>{

    // return (
        axios.post(`${baseUrl}/users`,ob)
        .then((res)=>{
            dispatch({type:SIGNUP_REQ_SUCCESS,payload:res.data})
        })

    // )
}

export const signin=(dispatch)=>{

    axios.get(`${baseUrl}/users`)
    .then((res)=>{
        dispatch({type:SIGNIN_REQ_SUCCESS,payload:res.data})
    })
}