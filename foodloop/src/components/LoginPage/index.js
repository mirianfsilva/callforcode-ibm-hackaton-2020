import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography, Grid, Card, CardActionArea, CardMedia, Hidden } from '@material-ui/core/';
import { Link, Paper, CardContent, TextareaAutosize } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import login from "./../../assets/img/temp-login.png";
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
        padding: 278,
    },
    cardContent: {
        flexGrow: 1,
    },
    
}));

export default function LoginPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} style={{ backgroundColor: '#fcfdf4' }}>
            <Container maxWidth="sm">
                <Grid item xs={12} sm={6}>
                    <CardMedia className={classes.cardMedia} image={login} />
                </Grid>
            </Container>
        </div>
    );
}

