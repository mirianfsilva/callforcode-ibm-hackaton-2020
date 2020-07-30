import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Grid, Divider, Typography, ListItemAvatar, Avatar, Container } from '@material-ui/core';
import logo from './../../assets/img/foodloop-transparent.png';
import './style.scss'

// Link a style sheet with a function component using the hook pattern.
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    media: {
        height: 0,
        paddingTop: '65.25%', // 16:9
    },
    heroContent: {
        height: 500,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 6, 12, 6),
    },

}));

export default function Footer(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.heroContent} style={{ backgroundColor: '#fff' }}>
                <Typography component="h4" variant="inherit" align="center" color="initial" paragraph>
                    WHERE WE ARE
                </Typography>
                <List variant="inherit" align="center" color="initial" className={classes.root} justify="center">
                    <ListItem variant="inherit" align="center" color="initial">
                        <ListItemText primary="Belo Horizonte" />
                        <ListItemText primary="Belo Horizonte" />
                        <ListItemText primary="Belo Horizonte" />
                        <ListItemText primary="Belo Horizonte" />
                    </ListItem>
                    <ListItem variant="inherit" align="center" color="initial">
                        <ListItemText primary="Belo Horizonte" />
                        <ListItemText primary="Belo Horizonte" />
                        <ListItemText primary="Belo Horizonte" />
                        <ListItemText primary="Belo Horizonte" />
                    </ListItem>
                    <ListItem variant="inherit" align="center" color="initial">
                        <ListItemText primary="Belo Horizonte" />
                        <ListItemText primary="Belo Horizonte" />
                        <ListItemText primary="Belo Horizonte" />
                        <ListItemText primary="Belo Horizonte" />
                    </ListItem>
                    <Divider />
                    <ListItem variant="inherit" align="center" color="initial">
                        <ListItemText primary="Contact Us" />
                        <ListItemText primary=" " />
                        <ListItemText primary=" " />
                        <ListItemText primary=" " />
                    </ListItem>
                </List>
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

// <Grid item xs={12} sm={6} justify="center">
                    
//                     </Grid>
//                     <Grid item xs={12} sm={6} justify="center">
//                         <p>  </p>
//                     </Grid>