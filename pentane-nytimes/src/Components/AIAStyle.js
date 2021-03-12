import { makeStyles } from '@material-ui/core/styles';

export const useStyles=makeStyles(()=>({
    title:{
        fontSize: 18,
        fontWeight:500,
        marginBottom:15,
        textAlign:"left"
    },
    subTitle:{
        color:"gray",
        textAlign:"left",
        fontSize:"14px",
    },
    image:{
        width:"100%",
        height:"90%",
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