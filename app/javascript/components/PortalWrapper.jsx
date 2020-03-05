import React from 'react';
import { connect } from 'react-redux';
import { fetchStudios, toggleStudioSelection, toggleDaySelection } from '../actions/portalActions';
import StudioSelector from './StudioSelector';
import DaySelector from './DaySelector';
import ClassSessionList from './ClassSessionList';

class PortalWrapper extends React.Component {
  componentDidMount () {
    this.props.fetchStudios();
  }

  render () {
    const { studios, selectedDays, selectedStudios, classSessions } = this.props;
    return (
      <div>
        <StudioSelector
          studios={studios}
          selectedStudios={selectedStudios}
          toggleStudioSelection={this.props.toggleStudioSelection}
        />
        <DaySelector
          selectedDays={selectedDays}
          toggleDaySelection={this.props.toggleDaySelection} 
        />
        <ClassSessionList classSessions={classSessions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  fetchStudios,
  toggleStudioSelection,
  toggleDaySelection
};

export default connect(mapStateToProps, mapDispatchToProps)(PortalWrapper);
