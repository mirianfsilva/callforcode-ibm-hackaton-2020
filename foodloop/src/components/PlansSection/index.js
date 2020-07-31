import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Link, Card, Grid, CardMedia, CardContent, Typography, Container } from '@material-ui/core';
import image from './../../assets/img/img4.png';
import './style.scss';
// Link a style sheet with a function component using the hook pattern.
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: '15px',
    },
    media: {
        height: 0,
    },
    heroContent: {
        height: 200,
        padding: theme.spacing(6, 0, 6, 0),
        marginBottom: 50,
    },
    cardMedia: {
        flexGrow: 1,
        height: 200,
        padding: theme.spacing(6, 0, 6, 0),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    mainFeaturedPost: {
        position: 'relative',
        marginLeft: 80,
        marginRight: 80,
        color: theme.palette.common.white,
        backgroundImage: 'url(image)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginBottom: 50,
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(5),
    },
}));

export default function PlansSection(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image})` }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={image} />}
            <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Card>
                            <CardContent>
                                <Typography component="h4" variant="inherit" align="center" color="initial" gutterBottom>
                                    PLAN SECTION
                                </Typography>
                                <Typography variant="inherit" color="initial" paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                                </Typography>
                                <Link variant="inherit" href="#">
                                    link
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

PlansSection.propTypes = {
    post: PropTypes.object,
};

