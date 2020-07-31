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
        padding: theme.spacing(12, 0, 6),
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'round',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        flexGrow: 1,
        width: 200,
        padding: 200,
        color: theme.palette.common.white,
        backgroundImage: 'url(image)',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    cardContent: {
        flexGrow: 1,
    },
    
}));

const ColorButton = withStyles((theme) => ({
    root: {
        backgroundColor: '#B5C76F',
        '&:hover': {
            backgroundColor: '#9CB14E',
        },
    },
}))(Button);

export default function LoginAsPage(props) {
    const classes = useStyles();

    return (
        <div className={classes.heroContent} style={{ backgroundColor: '#fcfdf4' }}>
            <Container maxWidth="sm">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <CardMedia className={classes.cardMedia} image={login} />
                    </Grid>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMediaBg} image={bg} />
                    </Hidden>
                </Grid>
            </Container>
        </div>
    );
}

