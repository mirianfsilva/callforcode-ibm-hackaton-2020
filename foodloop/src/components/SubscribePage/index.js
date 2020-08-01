import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography, Grid, Card, CardActionArea, CardMedia, Hidden } from '@material-ui/core/';
import { Link, Paper, CardContent, TextareaAutosize } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import subscribe from "./../../assets/img/temp-subscribe.png";
import bg from "./../../assets/img/bg-square.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    media: {
        height: 0,
    },
    heroContent: {
        height: 500,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5, 0, 12, 0),
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'round',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        width: 40,
        padding: 278,
    },
    cardContent: {
        flexGrow: 1,
    },
    
}));

export default function SubscribePage(props) {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} style={{ backgroundColor: '#fcfdf4' }}>
            <Container maxWidth="sm">
                <Grid container spacing={1}>
                    <CardMedia className={classes.cardMedia} image={subscribe} />
                </Grid>
            </Container>
        </div>
    );
}

