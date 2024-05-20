// components/Home.js

import React from 'react';
import Header from '../components/header.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';

import logo from '../logo.svg';
import selfie from '../assets/selfie01.png'

function Home() {
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto', // Maintain aspect ratio
    };

    return <div>
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={6}>
                        <img src={selfie} style={imageStyle}></img>
                    </Grid>
                    <Grid item xs={10}>

                        <div>
                            <h2> Introduce </h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Vel risus commodo viverra maecenas. Elementum curabitur vitae nunc sed velit. Faucibus ornare suspendisse sed nisi lacus. Cras sed felis eget velit aliquet sagittis id consectetur. Tempor id eu nisl nunc mi ipsum. Augue interdum velit euismod in pellentesque massa placerat. Bibendum ut tristique et egestas quis ipsum suspendisse. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Vel pharetra vel turpis nunc eget lorem dolor. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Egestas congue quisque egestas diam in arcu cursus. Ut sem viverra aliquet eget. Nunc sed blandit libero volutpat sed cras ornare. Neque laoreet suspendisse interdum consectetur libero. </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>

            <Grid container spacing={4} columns={16}>
                <Grid item xs={8}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Working On
                            </Typography>
                            <Typography variant="h5" component="div">
                                Project Name
                            </Typography>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={logo}
                                title="green iguana"
                            />
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Working On
                            </Typography>
                            <Typography variant="h5" component="div">
                                Project Name
                            </Typography>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={logo}
                                title="green iguana"
                            />
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>


        </div>
    </div>;
}

export default Home;