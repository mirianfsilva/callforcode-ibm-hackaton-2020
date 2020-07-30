import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Hidden, Grid, CardMedia, CardContent, Typography, Container } from '@material-ui/core';
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

}));

export default function PlansSection(props) {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} style={{ backgroundColor: '#b5c76f' }}>
            <Container maxWidth="lg">
                <Grid container spacing={1} justify="center">
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={image} />
                    </Hidden>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography component="h4" variant="inherit" align="center" color="initial" paragraph>
                                OUR PROPOSAL
                                </Typography>
                                <Typography variant="inherit" color="initial" component="p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

PlansSection.propTypes = {
    post: PropTypes.object,
};

{/*  */}