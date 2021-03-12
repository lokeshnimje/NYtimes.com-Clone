import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from './AIStyle'
import axios from 'axios'

const AI=()=>{
    const classes=useStyles();
    const [data, setData ] = React.useState([])
     
    React.useEffect(()=>{
        
        axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=veI5P7qVillAxFUNbchxr8ijwFGG3M0z`)
        .then((res)=>{
            setData(res.data.results)
        })
    }, [])


    return (
        <>
        <Container>
            <Grid container alignItems={"center"} spacing={4} className={classes.gridMargin} >
                <Grid item sm={12} lg={4}>
                    <h3 className={classes.titleAlign}>{ data[24]?.des_facet[0]}</h3>
                    <div className={classes.articleSubtitle}> { data[24]?.abstract} { data[24]?.des_facet[3]} </div>
                    <div className={classes.articleDesc+" "+ classes.titleAlign}>14h ago By HAMILTON NOLAN</div>
                </Grid>
                <Grid item sm={12} lg={8}>
                    <img className={classes.image}   src= {classes.image} src={data[24]?.multimedia[0].url } alt=""></img>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default AI;