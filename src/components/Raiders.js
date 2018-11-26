import React, { Component } from 'react';

class Raiders extends Component {
  render() {
    const raiderNames = this.props.pageContext.value.raiderInfo.names;
    const raiderScores = this.props.pageContext.value.raiderInfo.scores;

    const names = raiderNames.map(item => <div><span>{ item }</span></div>);
    const scores = raiderScores.map(item => <div><span>{ item }</span></div>);

    return (
      <div>
        <h1>Post Layout</h1>
        { names }
        { scores }
      </div>
    )
  }
}

export default Raiders;
