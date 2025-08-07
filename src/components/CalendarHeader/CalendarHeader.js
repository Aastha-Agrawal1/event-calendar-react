import React from 'react';
import { useCalendar } from '../../context/CalendarContext';
import './CalendarHeader.modules.css';

const CalendarHeader = () => {
  const { currentDate, setCurrentDate } = useCalendar();

  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const monthYear = currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className={'calendarHeader'}>
      <div className={'navButtons'}>
        <button onClick={goToPreviousMonth}>&lt;</button>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className={'monthYear'}>{monthYear}</div>
    </div>
  );
};

export default CalendarHeader;