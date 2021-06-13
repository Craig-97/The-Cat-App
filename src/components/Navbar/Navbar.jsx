import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './navbar.scss';

export const Navbar = () => {
  return (
    <AppBar data-testid="navbar" className="navbar" position="sticky">
      <Toolbar className="navbar__toolbar">
        <Typography variant="h1">The Cat App</Typography>
        <div className="navbar__links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
};
