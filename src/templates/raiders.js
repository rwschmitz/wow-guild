import React from 'react';


class Raiders extends React.Component {
  render() {
    return (
      <div>
        <h1>ok</h1>
        { console.log(this.props.pageContext.value.raiderInfo.names) }
        { console.log(this.props.pageContext.value.raiderInfo.scores) }
      </div>
    )
  }
}

// export default ({ pageContext: { value } }) => (
//   <div>
//     <p>
//       { value.raiderInfo.names }
//     </p>
//     { console.log(value.raiderInfo.names) }
//   </div>
// )

export default Raiders
