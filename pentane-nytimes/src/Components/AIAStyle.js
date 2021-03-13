import { makeStyles } from '@material-ui/core/styles';

export const useStyles=makeStyles(()=>({
    title:{
        fontSize: 18,
        fontWeight:500,
        marginBottom:15,
        textAlign:"left"
    },
    subTitle:{
        color:"teal",
        textAlign:"left",
        fontSize:"14px",
    },
    imageBox:{
        width:"90%",
        height:"85%",
    },
    image:{
        width:"90%",
        height:"85%",
    },
    articleCover:{
        margin:"0px 0px 20px",
        borderBottom:"1px solid gray",
    },
    imageTitle:{
        color:"#cacaca",
        fontSize:"12px",
    }

}));