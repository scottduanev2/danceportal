import React from 'react';

class DaySelector extends React.Component {
  handleButtonToggle(dayIdx, allWeek, offset) {
    let days;
    if (allWeek) {
      days = [0, 1, 2, 3, 4, 5, 6];
    } else {
      const { selectedDays } = this.props;
      if (selectedDays.length == 7) {
        days = [ dayIdx ];
      } else {
        days = [];
        this.props.selectedDays.forEach((dId) => {
          days.push(dId);
        });
        const idx = days.indexOf(dayIdx);
        if (idx < 0) {
          days.push(dayIdx);
        } else {
          days.splice(idx, 1);
        }
      }
    }
    console.log("days: " + days)
    this.props.toggleDaySelection(days);
  }

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

    const offset = new Date().getDay();
    const offsetWeekdays = weekdays.slice(offset, 7).concat(weekdays.slice(0, offset));
    const selectedDays = this.props.selectedDays;
    const allSelectedClassName = Object.keys(selectedDays).length === 7 ? 'selected-button' : 'unselected-button';
    return (
      <div>
        <button className={allSelectedClassName} onClick={() => this.handleButtonToggle(null, true, offset)}>All Week</button>
        {offsetWeekdays.map((day) => {
          const dayIdx = weekdays.indexOf(day);
          const className = selectedDays.indexOf(dayIdx) < 0 ? 'unselected-button' : 'selected-button';
          return <button className={className} onClick={() => this.handleButtonToggle(dayIdx, false, offset)}>{day}</button>
        })}
      </div>
    )
  }
}

export default DaySelector;
