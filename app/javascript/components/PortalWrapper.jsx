import React from 'react';
import { connect } from 'react-redux';
import { fetchStudios } from '../actions/portalActions';
import StudioSelector from './StudioSelector';
import DaySelector from './DaySelector';
import ClassSessionList from './ClassSessionList';

class PortalWrapper extends React.Component {
  componentDidMount () {
    this.props.fetchStudios();
  }

  render () {
    const { studios, selectedDays, classSessions } = this.props;
    return (
      <div>
        <StudioSelector studios={studios} />
        <DaySelector selectedDays={selectedDays} />
        <ClassSessionList classSessions={classSessions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = { fetchStudios };

export default connect(mapStateToProps, mapDispatchToProps)(PortalWrapper);
