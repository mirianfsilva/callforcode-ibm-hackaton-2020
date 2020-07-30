import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Link, Card, Hidden, Grid, CardMedia, CardContent, Typography, Container } from '@material-ui/core';
import image from './../../assets/img/img4.png';

// Link a style sheet with a function component using the hook pattern.
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 0,
    },
    heroContent: {
        height: 300,
        padding: theme.spacing(6, 0, 6, 0),
    },
    cardMedia: {
        flexGrow: 1,
        height: 250,
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
        marginBottom: theme.spacing(2),
        backgroundImage: 'url(image)',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
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
            {/* <div className={classes.overlay} /> */}
            <Grid container justify="center">
                <Grid item xs={12} sm={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Card>
                            <CardContent>
                                <Typography component="h4" variant="inherit" align="center" color="initial" gutterBottom>
                                    OUR PROPOSAL
                                </Typography>
                                <Typography variant="inherit" color="initial" paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

{/*  */ }

