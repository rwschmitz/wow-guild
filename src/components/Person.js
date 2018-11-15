import React from 'react';

class Person extends React.Component {
  render() {
    const { personName, id } = this.props;
    return (
      <div>
        <ul>
          <li>person name: { personName }</li>
          <li>person id: { id }</li>
        </ul>
      </div>
    );
  }
}

export default Person;
