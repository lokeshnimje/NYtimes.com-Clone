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
  },
  login : {
    backgroundColor:"#567B95",
    color:"white",
    fontWeight:"bold",
    fontSize:"12px",
  },
  
  navbar : {
      backgroundColor:"white",
      color: "black",
      padding:"0 8%",
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const {name} = useParams()
  const location = useLocation(window.search)
  const history = useHistory(location)
  const handleLogin = () => {
    history.push('/login')
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SideMenuDrawer/>
          </IconButton>
          <Typography>
            <h4>{(name)? name.toUpperCase(): ""}</h4>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <img style = {{ margin:"auto"}} src="/title.png" alt="title" width="250px"/>
          </Typography>
          <Button className={classes.login} onClick={handleLogin} variant="text" size="small">Log in</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
