import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SideMenuDrawer from './SideMenuDrawer';
import { useParams } from 'react-router';
import {useLocation, useHistory} from "react-router"
import {FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux' 
import {logout} from "../Redux/auth/action"
import {Link, NavLink} from "react-router-dom"
import Logo from "../Utils/title.png"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    alignItems:"center",
    justifyContent:"center",
    cursor:"pointer"
  },
  login : {
    backgroundColor:"#567B95",
    
  },
  loginLink:{
    fontSize:"12px",
    color:"white",
    fontWeight:"bold",
    textDecoration:"none",
  },
  navbar : {
      backgroundColor:"white",
      color: "black",
      padding:"0 8%",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const {name} = useParams()
  const location = useLocation(window.search)
  const history = useHistory(location)
  const isAuth = useSelector (state => state.auth.isAuth)
  console.log(isAuth)
  // const isAuth = true
  const dispatch = useDispatch()
  const logout_user = () => {
      dispatch(logout())
      history.push("/Pentane/login")
  }
  const handleHome = () => {
    history.push('/Pentane')
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SideMenuDrawer/>
          </IconButton>
        <NavLink to = "/Pentane/search"><FaSearch/></NavLink>
          <Typography>
            <h4>{(name)? name.toUpperCase(): ""}</h4>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <img style = {{ margin:"auto"}} src= {Logo} alt="The New Times" width="250px"  onClick = {handleHome}/>
          </Typography>
          <Button className={classes.login} variant="text" size="small">
          {isAuth ? <Link className={classes.loginLink} onClick={logout_user}>LOGOUT</Link> :<Link  className={classes.loginLink} to='/Pentane/login'>LOGIN</Link>}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
