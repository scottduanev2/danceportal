import React from 'react';

class StudioSelector extends React.Component {
  handleButtonToggle(studioId, allStudios) {
    let studioIds;
    if (allStudios) {
      studioIds = Object.keys(this.props.studios);
    } else {
      const { selectedStudios, studios } = this.props;
      if (selectedStudios.length == Object.keys(studios).length) {
        studioIds = [studioId];
      } else {
        studioIds = [];
        this.props.selectedStudios.forEach((sId) => {
          studioIds.push(sId);
        });
        const idx = studioIds.indexOf(studioId);
        if (idx < 0) {
          studioIds.push(studioId);
        } else {
          studioIds.splice(idx, 1);
        }
      }
    }
    this.props.toggleStudioSelection(studioIds);
  }

  render() {
    const { studios, selectedStudios } = this.props;
    const allSelectedClassName = Object.keys(studios).length === selectedStudios.length ? 'selected-button' : 'unselected-button';

    return (
      <div>
        <button
          className={allSelectedClassName}
          onClick={() => this.handleButtonToggle(null, true)}>
          All Studios
        </button>
        {Object.keys(studios).map((key) => {
          const className = selectedStudios.indexOf(key) < 0 ? 'unselected-button' : 'selected-button';

          return (
            <button
              className={className}
              onClick={() => this.handleButtonToggle(key, false)}>{studios[key].name}
            </button>
          )
        })}
      </div>
    )
  }
}

export default StudioSelector;
