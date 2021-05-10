import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: '200px',
  },
  menu :{
      fontSize: '10px',
      fontWeight : "bolder",
      padding: "2px 20px"
  }
});

export default function SideMenuDrawer(){
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const category1 = ['Home', 'World', 'U.S.', 'Politics','N.Y.', 'Business','Opinion','Tech','Science','Health','Sports']
  const category2 = ['Arts','Books','Style','Food','Travel','Magazine','T Magzine','Real Estate','Video','The Upshot']
  
  const toggleDrawer = (anchor, open) => (event) => {
   
    setState({ ...state, [anchor]: open });
  };
 
  const list = (anchor) => (
    <div className={classes.fullList}
         onClick={toggleDrawer(anchor, false)}
    >

      <List>
        {category1.map((text) => (
          <ListItem className={classes.menu} button key={text}>
            <NavLink style={{textDecoration:"none", color:"black"}} to = {`/Pentane/Articles/${text.toLowerCase().replace(/[^\w\s]/gi, "")}`}> <ListItemText  primary={text} /> </NavLink> 
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {category2.map((text) => (
          <ListItem className={classes.menu} button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
    return (
        <div>
          <React.Fragment key="left">
          <MenuIcon onClick={toggleDrawer('left', true)}/>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
