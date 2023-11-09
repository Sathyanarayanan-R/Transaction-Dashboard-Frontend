import React, { useState, useEffect } from 'react';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Logo from '../../images/Logo.png';
import useStyles from './styles';

const Navbar = () => {

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link style={{ textDecoration: 'none' }} to="/products" className={classes.brandContainer}>
        <h1>Transaction Dashboard</h1>
        <img className={classes.image} src={Logo} alt="icon" height="40px" />
      </Link>
    </AppBar>
  );
};

export default Navbar;
