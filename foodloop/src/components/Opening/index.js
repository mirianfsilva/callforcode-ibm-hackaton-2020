import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography, CssBaseline, Grid, Card, CardActionArea, CardContent, CardMedia, Hidden } from '@material-ui/core/';
import boxfoodloop from "./../../assets/img/box-mock.png";
import bg from "./../../assets/img/bg-square.png";
import image3 from './../../assets/img/img3.png';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        height: 500,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(12, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        width: 160,
        padding: 200,
    },
    cardMediaBg: {
        width: 300, 
    },
    media: {
        height: 0,
    },
    cardContent: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(6),
        marginLeft: theme.spacing(6),
        color: "#fff",
    },
    
}));


export default function Opening(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <div className={classes.heroContent} style={{ backgroundColor: '#fcfdf4' }}>
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography component="h2" variant="inherit" align="center"
                            color="initial" gutterBottom>
                            FoodLoop
                        </Typography>
                        <Typography variant="inherit" align="left" color="initial" paragraph>
                            Connect with the community, Reconnect with the world!
                        </Typography>
                        <div className={classes.menuButton}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                <Button style={{ backgroundColor: '#749370' }} variant="contained" color="inherit">Subscribe</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardMedia className={classes.cardMedia} image={boxfoodloop} />
                    </Grid>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMediaBg} image={bg} />
                    </Hidden>
                </Grid>
            </Container>
        </div>
    );
}

Opening.propTypes = {
    post: PropTypes.object,
};