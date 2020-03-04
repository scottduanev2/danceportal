import React from 'react';
import ClassSession from './ClassSession';

class ClassSessionList extends React.Component {
  render () {
    return (
      <div>
        {this.props.classSessions.map((classSession) => {
          return <ClassSession classSession={classSession} />
        })}
      </div>
    )
  }
};

export default ClassSessionList;
