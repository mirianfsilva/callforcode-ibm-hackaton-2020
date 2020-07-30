import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, CardMedia, CardContent, Typography } from '@material-ui/core';
import image1 from './../../assets/img/img1.png';
import image2 from './../../assets/img/img2.png';
import image3 from './../../assets/img/img3.png';

// Link a style sheet with a function component using the hook pattern.
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    media: {
        height: 0,
        paddingTop: '65.25%', // 16:9
    },
    
}));
/* para alinhar o rolê 
.MuiGrid-spacing-xs-3 {
    width: calc(100% + 24px);
    /* margin: -12px; */
//   justify-content: center;
//}
// 
export default function OurProposal(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={6} sm={3}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={image1}
                        />
                        <CardContent>
                            <Typography variant="inherit" color="initial" component="p">
                                On sait depuis longtemps que travailler avec du texte lisible et
                                contenant du sens est source de distractions.
                      </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={image2}
                        />
                        <CardContent>
                            <Typography variant="inherit" color="initial" component="p">
                                On sait depuis longtemps que travailler avec du texte lisible et
                                contenant du sens est source de distractions.
                      </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={image3}
                        />
                        <CardContent>
                            <Typography variant="inherit" color="initial" component="p">
                                On sait depuis longtemps que travailler avec du texte lisible et
                                contenant du sens est source de distractions.
                      </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
    /*<div className={classes.root}>
        <Grid container spacing={1}>
                <Card>
                    <CardMedia
                        className={classes.media}
                        image={props.children}
                    />
                    <CardContent>
                        <Typography variant="body" color="text" component="p">
                            On sait depuis longtemps que travailler avec du texte lisible et
                            contenant du sens est source de distractions.
                        </Typography>
                    </CardContent>
                </Card>
            
            
                <Card>
                    <CardMedia
                        className={classes.media}
                        image={props.children}
                    />
                    <CardContent>
                        <Typography variant="body" color="text" component="p">
                            On sait depuis longtemps que travailler avec du texte lisible et
                            contenant du sens est source de distractions.
                        </Typography>
                    </CardContent>
                </Card>
            
                <Card>
                    <CardMedia
                        className={classes.media}
                        image={props.children}
                    />
                    <CardContent>
                        <Typography variant="body" color="text" component="p">
                            On sait depuis longtemps que travailler avec du texte lisible et
                            contenant du sens est source de distractions.
                        </Typography>
                    </CardContent>
                </Card>
            
        </Grid>
    </div>
);*/
}

