import  {GET_USERS ,DELETE_USER,ADD_USER ,UPDATE_USER, GET_SINGLE_USER}  from './ActionType';
import axios from 'axios'
import { useDispatch } from 'react-redux';
const getuser=(users)=>({
    
    type:GET_USERS,
    payload:users

})


const deleteUser=()=>{
    return {type:DELETE_USER}
}


const adduser=()=>{
    return{
        type:ADD_USER,
        // payload:user
    }
}

const GetSingleUserData=(user)=>{
    return{
        type:GET_SINGLE_USER,
        payload:user
    }
}

const updateUser=()=>{
    return{
        type:UPDATE_USER,
        // payload:user
    }
}


export const loaduser=()=>{
//    const dispatch=useDispatch()
 return function(dispatch){
    // console.log(GET_USERS);
    axios.get(`${process.env.REACT_APP_API}`).then((resp)=>{
        // console.log(resp.data)
        // console.log("inside resp")
         dispatch(getuser(resp.data));
        //  console.log("inside resp")
     }).catch(e=>console.log(e))
    
 }
}


export const RemoveUser=(id)=>{

    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp)=>{
            dispatch(deleteUser(resp.data))
            dispatch(loaduser(resp.data))
        }).catch(e=>console.log(e))
    }
}


export const Adduser=(user)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user).then((resp)=>{
            dispatch(adduser())
            dispatch(loaduser(resp.data))
        }).catch(e=>console.log(e))
    }
}


export const GetsingleUser=(id)=>{
    console.log(id)
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp)=>{
            // console.log(resp.data)
            // console.log("Hi");
            dispatch(GetSingleUserData(resp.data))
            dispatch(loaduser(resp.data))
        }).catch(e=>console.log(e))
    }
}



export const UPdateUser=(user,id)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((resp)=>{
            dispatch(updateUser())
            dispatch(loaduser(resp.data))
        }).catch(e=>console.log(e))
    }
}


