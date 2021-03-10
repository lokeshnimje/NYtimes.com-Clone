import React from 'react';
import {Grid, Container} from "@material-ui/core";
import {useStyles} from "./AIAStyle";
const AIA=()=>{
    const classes=useStyles();
    return (
        <>
            <Container>
                <Grid container spacing={4}>
                    <Grid item sm={3} xs={4}>
                        <div className={classes.title}>House Passes Labor Rights Expansion, but Senate Chances Are Slim</div>
                        <div className={classes.subTitle}>The House approved the most significant enhancement of labor rights since the New Deal, but the measure appeared headed for a Senate filibuster amid widespread Republican opposition.</div>
                    </Grid>
                    <Grid item sm={5} xs={8}>
                        <img alt="" className={classes.image} src="https://static01.nyt.com/images/2021/03/09/us/politics/09dc-cong/merlin_184805076_b1878e18-3d72-4c3d-843f-7f9e29865901-superJumbo.jpg"></img>
                        <div className={classes.imageTitle}>Speaker Nancy Pelosi in the Capitol on Tuesday. Democrats have embraced the bill as a centerpiece of their pandemic-era agenda.</div>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className={classes.articleCover}>
                            <div className={classes.title}>For Chuck Schumer, a Dream Job Comes With Tall Orders</div>
                            <div className={classes.subTitle}>After ascending to the top Senate job during the assault on the Capitol, Mr. Schumer faces a different kind of challenge: steering President Biden’s agenda with no margin for error.</div><br/>
                        </div>
                        <div className={classes.articleCover}>
                            <div className={classes.title}>For Chuck Schumer, a Dream Job Comes With Tall Orders</div>
                            <div className={classes.subTitle}>After ascending to the top Senate job during the assault on the Capitol, Mr. Schumer faces a different kind of challenge: steering President Biden’s agenda with no margin for error.</div><br/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AIA;