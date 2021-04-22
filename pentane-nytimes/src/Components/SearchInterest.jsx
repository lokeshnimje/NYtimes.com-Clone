import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import  "../Components/Css/styles.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// this is SearchIntrests.jsx which icludes dropdownmenus, Date Range, section and type

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width:'600px',

  },
  dropdown: {
    position: 'absolute',
    top: 14,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid #ddd',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    listStyle:'none',
    width:'190px',
    padding: '0px 0px 15px 0px',
    '& li' : {
        fontSize: '12px',
        padding: '11px 11px 11px 11px',        
    },
    '& li:hover':{
        backgroundColor : '#f0f8fc'
    }
  },
//   dropdown 2

dropdown2: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 153,
    zIndex: 1,
    border: '1px solid #ddd',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    width:'190px',
    listStyle:'none',
    padding: '0px 0px 15px 0px',
    '& li' : {
        fontSize: '12px',
        padding: '11px 11px 11px 11px',
        
    },
    '& li:hover':{
        backgroundColor : '#f0f8fc'
    }
  },
//   dropdown 3


dropdown3: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: '290px',
    zIndex: 1,
    border: '1px solid #ddd',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    width:'190px',
    listStyle:'none',
    padding: '0px 0px 15px 0px',
    '& li' : {
        fontSize: '12px',
        padding: '11px 11px 11px 11px',
        
    },
    '& li:hover':{
        backgroundColor : '#f0f8fc'
    }
  },
}));

 function SearchIntrest( {interest, setInterest} ) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [ id, setId ] =React.useState("");
  
  const handleClick = (e) => {
      setId(e.currentTarget.id)
      setOpen((prev) =>  !prev);
   
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  // handleChecked
 
  const  handleChecked =(e) => {
    const { name, value  } =e.target
    setInterest({...interest,[name]:value})
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
       <ul className="menu_ul">
                <li  className="heading_li" id="l1"  onClick={(e)=> handleClick(e)}>
                   Date Range <span className="down_arrow_icon_span"><ExpandMoreIcon /></span>
                </li>
                    {('l1'=== id ? open:null) ? (
                    <ul className={classes.dropdown}>
                        
                            <li className="heading_li_first"> Date Range <span className="up_arrow_icon_span"><ExpandLessIcon  onClick={()=>setOpen(false)} /></span></li>
                            <li onClick={()=>setOpen(false)}> All since 1851</li>
                            <li onClick={()=>setOpen(false)}  >Yesterday</li>
                            <li onClick={()=>setOpen(false)} >Past Week</li>
                            <li onClick={()=>setOpen(false)} >Past Month</li>
                            <li onClick={()=>setOpen(false)} >Past Year</li>
                            <li onClick={()=>setOpen(false)} >Specific Dates</li>              
                    </ul>
                    ) : null}

                <li className="heading_li" id="l2"  onClick={(e)=> handleClick(e)}>
                        Section <span className="down_arrow_icon_span"><ExpandMoreIcon /></span>
                </li>
                    {('l2'=== id ? open:null) ? (
                    <ul className={classes.dropdown2}>
                            {/* reused heading_li here be cautious  */}
                            <li className="heading_li_first"> Section <span className="up_arrow_icon_span"><ExpandLessIcon  onClick={()=>setOpen(false)}/></span></li>
                            <li> <input type="checkbox" /> Any</li>
                            <li> <input type="checkbox"  value="Arts" onClick={ handleChecked } /> Arts</li>
                            <li> <input type="checkbox"  value="Books" onClick={ handleChecked }/> Books</li>
                            <li> <input type="checkbox"/> Business</li>
                            <li> <input type="checkbox"/> Movies</li>
                            <li> <input type="checkbox"/> New York</li>
                            <li> <input type="checkbox"/> Opinion</li>
                            <li> <input type="checkbox"/> Sports</li>
                            <li> <input type="checkbox"/> Style</li>
                            <li> <input type="checkbox"/> U.S</li>
                            <li> <input type="checkbox"/> World</li>
                            
                    </ul>
                    ) : null}

                <li className="heading_li" id="l3"  onClick={(e)=> handleClick(e)}>
                        Type <span className="down_arrow_icon_span"><ExpandMoreIcon /></span>
                </li>
                    {('l3'=== id ? open:null) ? (
                    <ul className={classes.dropdown3}>
                        {/* reused heading_li here be cautious  */}
                            <li className="heading_li_first"> Type <span className="up_arrow_icon_span"><ExpandLessIcon onClick={()=>setOpen(false)}/></span></li>
                            <li> <input type="checkbox"/> Any</li>
                            <li> <input type="checkbox" name="types"   value="article" onClick={ handleChecked }/> Article</li>
                            <li> <input type="checkbox" name="types" value = "audio" onClick= {   handleChecked } /> Audio</li>
                            <li> <input type="checkbox" name="types" value = "audiocontainer" onClick= {   handleChecked } /> Audiocontainer</li>
                            <li> <input type="checkbox" name="types" value = "imagesildeshow" onClick= {   handleChecked } /> Image Slideshow</li>
                            <li> <input type="checkbox" name="types" value = "interactive" onClick= {   handleChecked } /> Interactive Graphics</li>
                            <li> <input type="checkbox" name="types" value = "recipe" onClick= {   handleChecked } /> Recipe</li>
                            <li> <input type="checkbox" name="types" value = "video" onClick= {   handleChecked } /> Video </li>
                            <li> <input type="checkbox" name="types" value = "wirecutterarticle" onClick= {   handleChecked } /> Wirecutterarticle</li>
                            
                    </ul>
                    ) : null}
                    </ul>
       
      </div>
    </ClickAwayListener>
  );
}

export { SearchIntrest }