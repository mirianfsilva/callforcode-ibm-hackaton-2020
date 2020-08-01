import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Grid, Divider, Typography, ListItemAvatar, Avatar, Container } from '@material-ui/core';
import logo from './../../assets/img/foodloop-transparent.png';
import './style.scss'

// Link a style sheet with a function component using the hook pattern.
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 0,
        paddingTop: '65.25%', // 16:9
    },
    heroContent: {
        height: 300,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 6, 12, 6),
        fontFamily: 'Poppins',
    },

}));

const Map=()=>{
    return (
        <div className="google-map-code">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.310029971148!2d-43.96692308473871!3d-19.86912648663791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690f4847329c5%3A0xac57002aecee9c51!2sInstituto%20de%20Ci%C3%AAncias%20Exatas!5e0!3m2!1spt-BR!2sbr!4v1596244992577!5m2!1spt-BR!2sbr" width="100%" height="340" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    );
 }
 export{Map}

export default function Footer(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.heroContent} style={{ backgroundColor: '#fff' }}>
                <Typography component="h4" variant="inherit" align="center" color="initial" paragraph>
                    WHERE WE ARE
                </Typography>
                <Map />
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <img src={logo} className="img-footer" />
                    </ListItemAvatar>
                    <ListItemText primary="© Copyright 2020 - FoodLoop - All rights reserved FoodLoop" justify="left"/>
                </ListItem>
            </Container>
        </div>
    );
}