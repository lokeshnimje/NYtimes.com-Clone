import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from './AIStyle'

const AI=()=>{
    const classes=useStyles();
    return (
        <>
        <Container>
            <Grid container alignItems={"center"} spacing={4} className={classes.gridMargin} >
                <Grid item sm={12} lg={4}>
                    <h3 className={classes.titleAlign}>Down with the British Monarchy</h3>
                    <div className={classes.articleSubtitle}>Any nation that still has a monarchy in 2021 is proving itself to have a mortifying lack of revolutionary gumption.</div>
                    <div className={classes.articleDesc+" "+ classes.titleAlign}>14h ago By HAMILTON NOLAN</div>
                </Grid>
                <Grid item sm={12} lg={8}>
                    <img className={classes.image} src="https://static01.nyt.com/images/2021/03/09/opinion/09Nolan1/merlin_156132372_54aed09c-6664-4ff9-a2b1-c85e13824896-jumbo.jpg" alt=""></img>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default AI;