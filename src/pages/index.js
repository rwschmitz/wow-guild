import React from 'react';
import sanityClient from '@sanity/client'

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
      console.log(data);

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
      <div>
        <h1>name: { this.state.person.name }</h1>
        <h2>id: { this.state.person.id }</h2>
        <h2>id: { this.state.person.raidInstance }</h2>
      </div>
    );
  }
}

export default IndexPage;
