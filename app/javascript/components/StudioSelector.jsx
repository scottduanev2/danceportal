import React from 'react';

class StudioSelector extends React.Component {
  render() {
    return (
      <div>
        {this.props.studios.map((studio) => {
          return <button>{studio.name}</button>
        })}
      </div>
    )
  }
}

export default StudioSelector;
