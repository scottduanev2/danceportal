import React from 'react';

class DaySelector extends React.Component {
  render () {
    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    const currentDay = new Date().getDay();
    const offset = weekdays[currentDay];
    const offsetWeekdays = weekdays.slice(offset, 7).concat(weekdays.slice(0, offset));
    return (
      <div>
        {offsetWeekdays.map((day) => {
          return <button>{day}</button>
        })}
      </div>
    )
  }
}

export default DaySelector;
