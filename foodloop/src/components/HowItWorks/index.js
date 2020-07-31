import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Paper, Card, Grid, CardMedia, CardContent, Typography, Container, TextareaAutosize } from '@material-ui/core';
import './../../../src/index.scss';
import agriculture from './../../assets/img/agriculture.jpg'
import smallfarmer from './../../assets/img/small-farmer.png'
import './style.scss';
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
        height: 300,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(0, 1, 0, 6),
        marginBottom: 50,
    },
    cardMedia: {
        flexGrow: 1,
        height: 300,
        color: theme.palette.common.white,
        backgroundImage: 'url(image)',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
}));

export default function HowItWorks(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.cardMedia} style={{ backgroundImage: `url(${agriculture})` }}>    
                {<img style={{ display: 'none' }} src={agriculture} />}
            </Container>
            <Container className={classes.heroContent} style={{ backgroundColor: '#fff' }}>    
                <Typography variant="inherit" align="center" color="initial" paragraph>
                    <br/>
                    <p>
                        <b>The agricultural industry is one of the largest in the world. </b> 
                        In 2019 it reached an aggregated value of 3 Trillions USD*. 
                        Nowadays, <b>agriculture is responsible, globally, for 70%* of the use of freshwater. </b> 
                        To keep its production, it is estimated that by 2050, this use will have an 15% increase.*  
                        <br/><br/> 
                        Water access can drastically change globally as consequences of <b>climate changes</b>, with some 
                        regions being more affected than others and practically unable to sustain agriculture, as some regions in Chile*.
                        Even though the agriculture industry achieves new highs in food production, in the world about 820 
                        million people, in 2018, suffered from undernourishment.*
                    </p>
                </Typography>
                <Link variant="inherit" href="#">
                    sources
                </Link>
            </Container>

            {/* <Container className={classes.heroContent} style={{ backgroundColor: '#fff' }}>    
                <Typography variant="inherit" align="center" color="initial" paragraph>
                    <br/>
                    <p>
                        As the number of child overweight did not reduced over the past years, and adult 
                        obesity is increasing*, we can see that, alongside the resource distribution, the 
                        focus of large food corporations in profitable products, consequently industrialized 
                        food is part of the problem. 
                        <br/>
                        <b>Are we gonna let faceless corporations control the food system?</b>
                    </p>
                </Typography>
            </Container> */}

            <Container className={classes.cardMedia} style={{ backgroundImage: `url(${smallfarmer})` }}>    
                {<img style={{ display: 'none' }} src={smallfarmer} />}
            </Container>            
            <Container className={classes.heroContent} style={{ backgroundColor: '#fff' }}>    
                <Typography variant="inherit" align="center" color="initial" paragraph>
                    <p>
                        On the other hand, we have small farmers all around the world. These people live by and 
                        for their farms. They exist, and produce food organically and sustainably.
                        But, few people know or are in contact with these small productors And, usually, 
                        these small farmers are not valued enough. <b>We can, and we want, to start changing that!</b>
                        <br/>
                        <br/>
                        We offer a service to help you know your local farmer and eat more healthy.
                        This service is a subscription box optimized (literally) for your dietary needs. 
                        The boxes are individually constructed following an algorimactly solution for your 
                        nutrition needs, and the locally accessible foods produced in your region. Also, it 
                        eventually includes infos of these farmers that produce the food you will consume. 
                        (Eventually, even recipes)
                    </p>
                </Typography>
            </Container>
        </div>
    );
}

