import React from 'react';
import { useCalendar } from '../../context/CalendarContext';
import  './Controls.css';

const Controls = () => {
  const { setCurrentDate, setViewMode, viewMode } = useCalendar();

  const handleTodayClick = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className={"controlsContainer"}>
      <button className={'todayButton'} onClick={handleTodayClick}>Today</button>
    </div>
  );
};

export default Controls;