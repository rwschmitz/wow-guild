import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
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
        <NavBar />
        <div>
          <p>this is some test copy blah blah blahsdfsdf blah</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default About;
