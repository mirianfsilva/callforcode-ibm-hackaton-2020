import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, CssBaseline, Typography, Container } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Logo from '../../assets/img/foodloop-menu-logo.png';
import './style.scss';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(6),
        marginLeft: theme.spacing(6),
        color: "#536f4f",
    },
    menuList: {
        marginRight: theme.spacing(6),
        marginLeft: theme.spacing(6),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Menu(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar position="fixed" style={{ backgroundColor: '#fff' }}>
                    <Typography variant="h6" className={classes.title}>
                        <img className="Logo" src={Logo} alt="foodloop" />
                    </Typography>
                    <List variant="inherit" align="center" color="initial" className={classes.menuButton} justify="center">
                        <ListItem variant="inherit" align="center" color="initial" className={classes.menuList}>
                            <ListItemText primary="HOME" />
                            <ListItemText primary="OUR PROPOSAL" />
                            <ListItemText primary="PLANS" />
                            <ListItemText primary="ABOUT" />
                            <ListItemText primary="CONTACT" />
                        </ListItem>
                    </List>
                    <Button style={{ backgroundColor: '#749370' }} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}