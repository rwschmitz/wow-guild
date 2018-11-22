import React from 'react';
import sanityClient from '@sanity/client';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'gatsby';
import '../css/index.css';
import Theme from '../components/Theme';

const client = sanityClient({
  projectId: 'g8mb60b3',
  dataset: 'production',
  useCdn: true
});

class IndexPage extends React.Component {

  state = {
    person: {
      name: '',
      id: '',
      raidInstance: ''
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.getData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

    getData = async () => {
      const query = `*[_type == "bossKills"] { _id, bossName, raidInstance }`;
      const data = await client.fetch(query).then(response => response);

      const [ { bossName, raidInstance, _id } ] = [ data[0] ];

      if(this._isMounted) {
        this.setState({
          person: {
            name: bossName,
            raidInstance,
            id: _id
          }
        });
      }
    }

    /*
        Creating this class property so that we can
        successfully abort any fetch requests to prevent
        any memory leaks when using this.setState({ }) in combination
        with data being returned from a 3rd party API
    */
    _isMounted = false;

  render() {
    return (
      <Theme>
        <AppBar className="nav" position="sticky" elevation={ 2 }>
          <Link className="link" href="/" to="/">Home</Link>
          <Link className="link" href="/about" to="/about">About</Link>
          <Link className="link" href="/about" to="/about">Pics</Link>
          <Link className="link" href="/about" to="/about">Apply</Link>
        </AppBar>
        <div>
          <h1>name: { this.state.person.name }</h1>
          <h2>id: { this.state.person.id }</h2>
          <h2>id: { this.state.person.raidInstance }</h2>
          <p>this is some test copy blah blah blah blah</p>
        </div>
      </Theme>
    );
  }
}

export default IndexPage;
