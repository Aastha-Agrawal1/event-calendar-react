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
      <div className={'viewModeButtons'}>
        <button
          className={`${'viewButton'} ${viewMode === 'week' ? 'active' : ''}`}
          onClick={() => setViewMode('week')}
        >
          Week
        </button>
        <button
          className={`${'viewButton'} ${viewMode === 'month' ? 'active' : ''}`}
          onClick={() => setViewMode('month')}
        >
          Month
        </button>
        <button
          className={`${'viewButton'} ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          Grid
        </button>
      </div>
    </div>
  );
};

export default Controls;