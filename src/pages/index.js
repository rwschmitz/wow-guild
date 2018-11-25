import React from 'react';
import sanityClient from '@sanity/client';
import Theme from '../components/Theme';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import '../css/index.css';


const client = sanityClient({
  projectId: 'g8mb60b3',
  dataset: 'production',
  useCdn: true
});

class IndexPage extends React.Component {

  state = {
    bossKillInformation: {}
  }

  componentDidMount() {
    this._isMounted = true;
    this.getData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  getData = async () => {
    const query = `*[_type == "bossKills"] { bossName, bossKillImage, raidInstance }`;
    const data = await client.fetch(query).then(response => response);

    const bossNames = data.map(item => item.bossName);
    const raidInstances = data.map(item => item.raidInstance);

    const bossKillImageRefs = data.map(item => item.bossKillImage.asset._ref);
    const bossImageUrlPrefix = 'https://cdn.sanity.io/images/g8mb60b3/production/';
    const bossKillImageSources = bossKillImageRefs.map(item => item.replace('image-', '').split('-'));
    const bossKillImageStrings = bossKillImageSources.map(item => `${bossImageUrlPrefix}${item[0]}-${item[1]}.${item[2]}`);

    const bossKillInformation = {
      bossName: bossNames,
      bossKillImages: bossKillImageStrings,
      raidInstance: raidInstances,
    }

    if(this._isMounted) {
      this.setState({
        bossKillInformation
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
        <NavBar />
        <div style={ { display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' } }>
          <Home
            bossKillInformation={ this.state.bossKillInformation }
          />
        </div>
      </Theme>
    );
  }
}

export default IndexPage;
