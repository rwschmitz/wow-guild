import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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


class Theme extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={ theme }>
        { this.props.children }
      </MuiThemeProvider>
    );
  }
}

export default Theme;

Theme.propTypes = {
  children: PropTypes.node.isRequired
}