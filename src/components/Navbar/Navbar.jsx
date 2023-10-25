import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@mui/material';
import { Shop, ShoppingCart } from '@mui/icons-material';
import logo from '../../assets/candyLogo.jpg'
import useStyles from './styles'


const Navbar = ( {totalItems} ) => {
    
const classes = useStyles();

  return (
    <div>
       
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography varient='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='CandyLand' height='25px' className={classes.image}/>
                    CandyLand
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar