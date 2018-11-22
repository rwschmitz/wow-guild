import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'gatsby';
import '../css/index.css';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        flexDirection: 'row'
      }
    }
  },
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#5f4b8b'
    }
  }
});

class About extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        <AppBar className="nav" elevation={ 2 } position="sticky">
          <Link className="link" href="/" to="/">Home</Link>
          <Link className="link" href="/about" to="/about">About</Link>
          <Link className="link" href="/about" to="/about">Pics</Link>
          <Link className="link" href="/about" to="/about">Apply</Link>
        </AppBar>
        <div>
          <p>this is some test copy blah blah blahsdfsdf blah</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default About;
