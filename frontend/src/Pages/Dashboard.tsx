import React from 'react'
import { Button, Grid } from '@mui/material'
import GradientBackground from '../Components/GradientBackground'

import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const [gradientActive, setGradientActive] = React.useState(true)

    const navigate = useNavigate();

    const startModule = () => {
        setGradientActive(false)
        navigate("/two-sum");
    }

    return (
        <React.Fragment>
        { gradientActive && <GradientBackground/>} 
        <Grid container style={{ backgroundColor: 'white', height: '100%', paddingLeft: 200, paddingRight: 50, marginBottom: 300 }}>
            <Grid style={{zIndex: 2}}>
                <img src='/images/logo.png' style={{ height: 80}}/>
            </Grid>
            <Grid container style={{ marginTop: 150 , zIndex:1 }}>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12} style={{fontSize: 80, fontWeight: 'bold', color: 'rgba(10, 37, 64, 0.9)', paddingBottom: 30}}>
                        INTERACTIVE LEARNING 
                        </Grid>
                        <Grid item xs={9} style={{fontSize: 40, fontWeight: 'bold', color: 'rgba(10, 37, 64, 0.9)'}}>
                        FOR DATA STRUCTURE AND ALGORITHMS
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid item xs={6} style={{padding: 20, backgroundColor: 'rgba(237, 237, 237, 0.3)', borderRadius: 20}}>
                    <Grid container>
                        <Grid item xs={12} style={{ color: 'white'}}>
                            <img src='/images/logo.png' style={{ height: 50 }}/>
                        </Grid>
                        <Grid item xs={8}  >
                                <img src='/images/editor.png' style={{width: '150%', height: '100%', borderRadius: 5}}/>
                        </Grid>
                        <Grid item xs={4} style={{}}>
                            <img src={'/images/demo.gif'} alt="loading..." style={{width: '100%', height: '200px', borderTopRightRadius: 5}}/>
                        </Grid>     
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} style={{marginTop: 150}}> 
                <Grid container style={{ textAlign: 'center'}}>
                    <Grid item xs={6} style={{ padding: 10}} >
                        <Grid style={{ borderRadius: 10, height: '300px', paddingTop: 20, backgroundImage: `url(${'./images/cover/mars-cover.png'})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: "0px 16px 15px rgb(112, 144, 176, .20)", border:"solid rgb(112, 144, 176, .20) 1px", position: 'relative'}}>
                            <Grid item xs={12} style={{fontSize: 26, fontWeight: 'bold', color: '#e07a5f'}}>
                                Mars Exploration
                            </Grid>
                            <Grid item xs={12} style={{fontSize: 20, color:'#3d405b', fontWeight: 700, marginTop: 5}}>
                                Arrays 
                            </Grid>
                            <Grid item xs={12}  style={{position: 'absolute', bottom: 10, left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', width: '200px' }}>
                                <Button onClick={startModule}  style={{padding: 15, backgroundColor: '#81b29a', fontWeight: 'bold', color: 'white',  boxShadow: "0px 16px 15px rgb(112, 144, 176, .20)", border:"solid rgb(112, 144, 176, .20) 1px"}}>Start Module</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} style={{ padding: 10}} >
                        <Grid style={{ borderRadius: 10, height: '300px',  paddingTop: 20, backgroundImage: `url(${'./images/cover/apocalypse-cover.png'})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: "0px 16px 15px rgb(112, 144, 176, .20)", border:"solid rgb(112, 144, 176, .20) 1px", position: 'relative'}}>
                            <Grid item xs={12} style={{fontSize: 26, fontWeight: 'bold', color: '#006d77'}}>
                                Zombie Apocalypse
                            </Grid>
                            <Grid item xs={12} style={{fontSize: 20, color:'#3d405b', fontWeight: 700, marginTop: 5}}>
                                Binary Search Trees
                            </Grid>
                            <Grid item xs={12}  style={{position: 'absolute', bottom: 10, left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', width: '200px' }}>
                                <Button style={{padding: 15, backgroundColor: '#e29578', fontWeight: 'bold', color: 'white',  boxShadow: "0px 16px 15px rgb(112, 144, 176, .20)", border:"solid rgb(112, 144, 176, .20) 1px"}}>Coming Soon</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} style={{marginTop: 150}}>
                <Grid container style={{paddingLeft: 20, paddingRight: 20}}>
                    <Grid style={{ padding: 10, fontSize: 20, fontWeight: 'bold', color: '#006d77'}} >
                        Engaging Platform
                    </Grid>
                    <Grid style={{ padding: 10, fontSize: 40, fontWeight: 'bold', color:'#3d405b'}} >
                        A new way to learn data structures and algorithms.
                    </Grid>
                    <Grid style={{ padding: 10, fontSize: 20, lineHeight: 1.5}} >
                        Follow along with engaging stories while learning data structures and algorithms. Dive into the worlds with our interactive editor and see your code come to life.
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </React.Fragment>
    )
}

export default Dashboard