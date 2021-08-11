import React from 'react';
import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box,Button, Paper } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import Image from './images/Banner.jpg';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
   <Paper>
     <Box color="text.primary" height="80vh" style={{backgroundImage:`linear-gradient(
    to bottom,
    rgba(0,0,0, 0),
    rgba(0,0,0, 100)
  ),url(${Image})`,backgroundSize:'cover',paddingLeft:'5%'}}>
       <div style={{ float:'right',marginRight:'3%'}}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        English  <img src="/images/Dropdown.png"  style={{width:'20%'}}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{backgroundColor:'transparent'}}
      >
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>Hindi</MenuItem>
        <MenuItem onClick={handleClose}>French</MenuItem>
      </Menu>
    </div>
        <Grid container justifyContent="center" spacing={0} style={{paddingTop:'3%'}} >
          <Grid key={0} item style={{marginTop:'2%',marginRight:'-8%'}}>
          <img src="/images/ridePal.png"  style={{width:'50%'}}/>
            </Grid>
            <Grid key={1} item>
          <img src="/images/Separator.png" style={{width:'70%'}}/>
            </Grid>
            <Grid key={2} item style={{marginTop:'2%'}}>
          <img src="/images/Westin.png" style={{width:'50%'}}/>
            </Grid>
        </Grid>
        
      
        <Typography variant="h4" component="h1" gutterBottom>
         Welcome to San Fransico
        </Typography>
        
        <Button variant="contained" color="primary">
          Pwy Using Credit Card
        </Button>
        <Button variant="contained" color="secondary">
        <img src="/images/ApplePay.jpg"  style={{width:'50%'}}/>
        </Button>
        <Box  height='60vh' width= '30%' style={{ float:'right',marginRight:'3%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"test" /* YOUR KEY HERE */ }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
          
        >
         <img src="/images/Direction.png"/>
        </GoogleMapReact>
        </Box>
        </Box>
      </Paper>
  );
}

export default App;
