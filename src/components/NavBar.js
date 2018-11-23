import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'gatsby';
import '../css/index.css';

class NavBar extends React.Component {
  render() {
    return (
      <AppBar className="nav" position="sticky" elevation={ 2 }>
        <Link className="link" href="/" to="/">Home</Link>
        <Link className="link" href="/about" to="/about">About</Link>
        <Link className="link" href="/about" to="/about">Pics</Link>
        <Link className="link" href="/about" to="/about">Apply</Link>
      </AppBar>
    );
  }
}

export default NavBar;
