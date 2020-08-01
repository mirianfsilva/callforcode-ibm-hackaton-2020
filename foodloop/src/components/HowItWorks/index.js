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
        padding: theme.spacing(0, 6, 0, 6),
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
            <Container align="justify" className={classes.heroContent} style={{ backgroundColor: '#fff' }}>    
                <Typography variant="inherit" color="initial" paragraph>
                    <br/>
                    <p>
                        <b>The agricultural industry is one of the largest in the world. </b> 
                        In 2019 it reached an aggregated value of 3 Trillions USD*. 
                        Nowadays, <b>agriculture is responsible, globally, for 70%* of the use of freshwater. </b> 
                        To keep its production, it is estimated that by 2050, this use will have an 15% increase.*
                        <b>This causes a huge impact in the climate changes.</b>
                        <br/><br/> 
                        With a progress to give more space to local farmers, more families can support an ecological 
                        small business, have a better diet and <b>help the world with these little changings</b>.

                        {/* Water access can drastically change globally as consequences of <b>climate changes</b>, with some 
                        regions being more affected than others and practically unable to sustain agriculture, as some regions in Chile*.
                        Even though the agriculture industry achieves new highs in food production, in the world about 820 
                        million people, in 2018, suffered from undernourishment.* */}
                        <br/><br/>
                        We have small farmers all around the world. These people live by and 
                        for their farms. They produce food organically and sustainably.
                        But, few people know or are in contact with these small productors And, usually, 
                        these small farmers are not valued enough. 
                    </p>
                </Typography>
                <Typography component="h2" variant="inherit" align="center" color="initial" style={{ color: '#42443e' }} paragraph>
                    We can, and we want, to start changing that!
                </Typography>
            </Container>

            <Container className={classes.cardMedia} style={{ backgroundImage: `url(${smallfarmer})` }}>    
                {<img style={{ display: 'none' }} src={smallfarmer} />}
            </Container>            
            <Container className={classes.heroContent} style={{ backgroundColor: '#fff' }}>    
                <Typography variant="inherit" color="initial" paragraph>
                    <br/>
                    <p>
                        We offer a service to help you know your local farmer and eat more healthy.
                        This service is a <b>subscription box optimized</b> (literally) for your dietary needs. 
                        The boxes are individually constructed following an algorimactly solution for your 
                        nutrition needs, and the locally accessible foods produced in your region. Also, it 
                        eventually includes infos of these farmers that produce the food you will consume. 
                        (Eventually, even recipes)
                        <br/><br/>
                        Our service will provide suggestions of new goods to plant/produce. These suggestions will be 
                        tailored to farmers, based on their regional nutrition demands, as well as climate, farm space, budget, etc.
                        That will be feed to <b>AI algorithms</b> that can suggest better investments.
                    </p>
                </Typography>
            </Container>

            <Container className={classes.heroContent} style={{ backgroundColor: '#fff' }}>    
                <Typography variant="inherit" color="initial" paragraph>
                    <br/>
                    <p>
                        Our recommendation system is built using the <b>IBM® Watson Machine Learning*.</b> This system uses regional 
                        information of the farmers, as well, as the demands from consumers in their region.
                        On the other side, our optimization system takes the consumers' diets and models them as a Linear 
                        Program, and uses the <b>IBM® Decision Optimization*</b> for Watson Studio to solve each problem.  From the 
                        solutions we can craft the boxes for our clients.
                    <br></br><br></br>
                        Our solution basically uses two different systems: a recommendation system, and an optimization one. 
                        The first, is directed for the food producers, while the later is related to consumers.
                        Both systems rely on a unified database, with two important distinct representations: diets and foods. 
                        The diets database stores all diets from our clients, that will be used for construct their box, while 
                        the food database store the stock of food produced by the registered farmers, also contains the nutrition 
                        of specific foods collected from FoodData Central.
                    </p>
                </Typography>
            </Container>

            <Container className={classes.heroContent} style={{ backgroundColor: '#fff' }}>    
                <Typography component="h2" variant="inherit" align="center" color="initial" style={{ color: '#42443e' }} paragraph>
                    <br/>
                        With this, we wish to give space for small farmers and producers to gain recognition, 
                        while providing food with quality for our clients. 
                        At the same time respecting the nature and using recycle material to produce our boxes, priorizing 
                        our costumers and their needs.
                </Typography>
                <Typography variant="inherit" color="initial" paragraph>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <b>References: </b>
                    <Link variant="inherit" href="https://data.worldbank.org/indicator/NV.AGR.TOTL.CD">[1] </Link>
                    <Link variant="inherit" href="https://blogs.worldbank.org/opendata/chart-globally-70-freshwater-used-agriculture">[2] </Link>
                    <Link variant="inherit" href="https://www.nrdc.org/experts/carolina-herrera/chiles-ongoing-water-crisis-threats-and-needed-actions">[3] </Link>
                    <Link variant="inherit" href="http://www.fao.org/publications/sofi/en/">[4] </Link>
                    <Link variant="inherit" href="http://www.fao.org/publications/sofi/en/">[5] </Link>
                    <Link variant="inherit" href="https://dataplatform.cloud.ibm.com/docs/content/DO/DOWS-Cloud_home.html?context=cpdaas">[6] </Link>
                    <Link variant="inherit" href="https://www.ibm.com/analytics/decision-optimization">[7] </Link>
                    <Link variant="inherit" href="https://www.ibm.com/downloads/cas/8AQOVLKD">[8] </Link>
                    <Link variant="inherit" href="https://www.greenpeace.org/international/story/43662/food-sovereignty-now-and-beyond-covid-19/">[9] </Link>    
                </Typography>
            </Container>
        </div>
    );
}


