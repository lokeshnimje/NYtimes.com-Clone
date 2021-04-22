import React from 'react';
import {Grid, Container} from "@material-ui/core";
import {useStyles} from "./AIAStyle";

const AIA=({ data3, data2, data, imgUrl, imgCaption})=>{
    const classes=useStyles();
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={3} xs={4} >
                        <div className={classes.title}> {data?.title } </div>
                        <div className={classes.subTitle}> { data?.abstract } </div>
                    </Grid>
                    <Grid item sm={5} xs={8}>
                        <div className = {classes.imageBox}>
                            <img alt="" className={classes.image} src={imgUrl } ></img>
                        </div>
                        <div className={classes.imageTitle}>{imgCaption}</div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className={classes.articleCover}>
                            <div className={classes.title}>{data2?.title}</div>
                            <div className={classes.subTitle}> { data2?.abstract } </div><br/>
                        </div>
                        <div className={classes.articleCover}>
                            <div className={classes.title}>{data3?.title }</div>
                            <div className={classes.subTitle}>{data3?.abstract}</div><br/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AIA;