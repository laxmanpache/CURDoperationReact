import React from 'react'
import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch , useSelector} from 'react-redux'
import { loaduser } from '../redux/action/Action';
import { ButtonGroup ,Button } from '@material-ui/core';
import { RemoveUser } from '../redux/action/Action';
// import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  

  const useStyles = makeStyles({
    table: {
      marginTop:100,
      minWidth: 900,
    },
  });

const Home = () => {
    const classes = useStyles();
  const dispatch = useDispatch()
  const userdata=useSelector(state=>state.data)
  console.log(userdata.users)

  useEffect(() => {
      dispatch(loaduser())
  }, [])
//   console.log(users)

const UserDelete=(id)=>{
    if(window.confirm("Are you sure ? you want to remove user?"))
    dispatch(RemoveUser(id))
}



// const history = createBrowserHistory({forceRefresh:true});
// const history=useHistory()
const nevigate=useNavigate();


    return (
        <>
        <Button style={{marginTop:5}} variant='contained' color="primary" onClick={()=>nevigate("/adduser")}>Add user</Button>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userdata.users.map((users,id) => (
            <StyledTableRow key={id}>
            
              <StyledTableCell align="center">{users.first_name}</StyledTableCell>
              <StyledTableCell align="center">{users.email}</StyledTableCell>
              <StyledTableCell align="center">{users.contact}</StyledTableCell>
              <StyledTableCell align="center">{users.Address}</StyledTableCell>
              <StyledTableCell align="center">

              <ButtonGroup variant="contained"  aria-label="contained primary button group">
                    <Button color="secondary" onClick={()=>UserDelete(users.id)} style={{marginRight:5}}>Delete</Button>
                    <Button color="primary" onClick={()=>nevigate(`/edituser/${users.id}`)}>Edite</Button>
            </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

    )
}

export default Home
