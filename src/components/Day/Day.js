import React from 'react';
import Event from '../Event/Event';
import './Day.css';

const Day = ({ date, isCurrentMonth, events, isToday }) => {
  return (
    <div className={`${'dayCell'} ${!isCurrentMonth ? 'otherMonth' : ''} ${isToday ? 'today' : ''}`}>
      <div className={'dayNumber'}>{date.getDate()}</div>
      <div className={'eventsContainer'}>
        {events.map(event => (
          <Event key={event.id} title={event.class_name} eventData={event}/>
        ))}
      </div>
    </div>
  );
};

export default Day;