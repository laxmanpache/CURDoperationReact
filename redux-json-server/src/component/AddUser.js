import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { Adduser } from '../redux/action/Action';
// import { Navigator } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:50,
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));



const AddUser = () => {
    const classes = useStyles();

    const handleInputChange=(e)=>{
      let {name , value}=e.target;
      setState({...state , [name]:value})
    }
    const [state,setState]=useState({
        first_name:"",
        email:"",
         contact:"",
         Address:""
    });

    const {first_name , email , contact , Address}=state;
    const navigator=useNavigate();
    const dispatch=useDispatch()

    const [erroe , SetErr]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!first_name || !email || !contact || !Address){
            SetErr("Please fill all input field")
            // alert(erroe)
        }
        else{
            dispatch(Adduser(state));
            navigator("/")
            SetErr("")
        }
    }
    return (
        <div>
           <h1>Add User</h1>
          
           <Button style={{marginTop:20}}  variant='contained' onClick={()=>navigator('/')} color="secondary" >Go back</Button>
           {erroe && <p style={{color:"red"}}>{erroe}</p> }
           <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="standard-basic" label="Name" value={first_name} name="first_name"  type="text" onChange={handleInputChange}/><br/>

      <TextField id="standard-basic" label="Email" value={email} name="email"  type="email" onChange={handleInputChange}/><br/>

      <TextField id="standard-basic" label="Mobile Number" value={contact} name="contact" type="number" onChange={handleInputChange}/> <br/>

      <TextField id="standard-basic" label=" Address" value={Address} name="Address" type="text" onChange={handleInputChange}/> <br/>
      <Button style={{marginTop:5}} type="submit" variant='contained' color="primary" onChange={handleInputChange}>submit</Button>
      
      
    </form>
        </div>
    )
}

export default AddUser
 