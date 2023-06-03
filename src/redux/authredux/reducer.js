import { SIGNIN_REQ_SUCCESS,  SIGNUP_REQ_SUCCESS,  } from "./actiontypes"

const initstate={
    isAuth:false,
    user:[]
}

export const reducer=(state=initstate,{type,payload})=>{

switch(type){
    case SIGNUP_REQ_SUCCESS:{
        return {
            ...state,isAuth:false,user:payload
        }
    }
    
    case SIGNIN_REQ_SUCCESS:{
        return {
            ...state,isAuth:true,user:payload
        }
    }
    default:{
        return state
    }
}

}