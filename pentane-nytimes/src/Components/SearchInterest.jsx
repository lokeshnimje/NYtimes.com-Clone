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

 function SearchIntrest() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [ id, setId ] =React.useState("");
  const [ selection, setSelection ] =React.useState()
  const handleClick = (e) => {
      setId(e.currentTarget.id)
      console.log(typeof id)
    setOpen((prev) =>  !prev);
   
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
       <ul className="menu_ul">
                <li  className="heading_li" id="l1"  onClick={(e)=> handleClick(e)}>
                   Date Range <span className="down_arrow_icon_span"><ExpandMoreIcon /></span>
                </li>
                    {('l1'=== id ? open:null) ? (
                    <ul className={classes.dropdown}>
                        
                            <li className="heading_li_first"> Date Range <span className="up_arrow_icon_span"><ExpandLessIcon /></span></li>
                            <li > All since 1851</li>
                            <li>Yesterday</li>
                            <li>Past Week</li>
                            <li>Past Month</li>
                            <li>Past Year</li>
                            <li>Specific Dates</li>              
                    </ul>
                    ) : null}

                <li className="heading_li" id="l2"  onClick={(e)=> handleClick(e)}>
                        Section <span className="down_arrow_icon_span"><ExpandMoreIcon /></span>
                </li>
                    {('l2'=== id ? open:null) ? (
                    <ul className={classes.dropdown2}>
                            {/* reused heading_li here be cautious  */}
                            <li className="heading_li_first"> Section <span className="up_arrow_icon_span"><ExpandLessIcon /></span></li>
                            <li> <input type="checkbox"/> Any</li>
                            <li> <input type="checkbox"/> Arts</li>
                            <li> <input type="checkbox"/> Books</li>
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
                            <li className="heading_li_first"> Type <span className="up_arrow_icon_span"><ExpandLessIcon /></span></li>
                            <li> <input type="checkbox"/> Any</li>
                            <li> <input type="checkbox"/> Article</li>
                            <li> <input type="checkbox"/> Audio</li>
                            <li> <input type="checkbox"/> Audiocontainer</li>
                            <li> <input type="checkbox"/> Image Slideshow</li>
                            <li> <input type="checkbox"/> Interactive Graphics</li>
                            <li> <input type="checkbox"/> Recipe</li>
                            <li> <input type="checkbox"/> Video </li>
                            <li> <input type="checkbox"/> Wirecutterarticle</li>
                            
                    </ul>
                    ) : null}
                    </ul>
       
      </div>
    </ClickAwayListener>
  );
}

export { SearchIntrest }