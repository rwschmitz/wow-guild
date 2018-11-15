import React from 'react';

import sanityClient from '@sanity/client'

// const sanityClient = require('../../sanity/node_modules/@sanity/client');

const client = sanityClient({
  // projectId: process.env.SANITY_ID,
  // dataset: process.env.SANITY_DATASET,
  projectId: 'g8mb60b3',
  dataset: 'production',
  useCdn: true
});

class IndexPage extends React.Component {

  state = {
    person: {
      name: '',
      id: ''
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
      const query = `*[_type == "person"] { _id, title, name } [0...1]`;
      const data = await client.fetch(query).then(response => response);

      const [ { name, _id } ] = [ data[0] ];
      
      if(this._isMounted) {
        this.setState({
          person: {
            name,
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
      <div>
        <h1>name: { this.state.person.name }</h1>
        <h2>id: { this.state.person.id }</h2>
      </div>
    );
  }
}

export default IndexPage;
