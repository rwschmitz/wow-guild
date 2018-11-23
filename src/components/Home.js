import React from 'react';
import Theme from '../components/Theme';
import BossCard from '../components/BossCard';
import '../css/index.css';

class Home extends React.Component {
  render() {
    return (
      <Theme>
        <h1 style={ { textAlign: 'center', width: '100%' } }>Step Dad!</h1>
        <BossCard
          bossKillInformation={ this.props.bossKillInformation }
        />
      </Theme>
    );
  }
}

export default Home;
