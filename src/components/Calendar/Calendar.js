import React, { useState, useEffect } from "react";
import Day from "../Day/Day";
import { useCalendar } from "../../context/CalendarContext";
import  "./Calendar.css";

const Calendar = () => {
  const { currentDate, events, viewMode } = useCalendar();
  console.log(events,"@@ Event List")
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const getDays = () => {
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const startDayIndex = firstDayOfMonth.getDay();

      const days = [];

      for (let i = 0; i < startDayIndex; i++) {
        const prevMonthDay = new Date(year, month, 0 - startDayIndex + 1 + i);
        days.push({
          date: prevMonthDay,
          isCurrentMonth: false,
        });
      }

      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        days.push({
          date: new Date(year, month, i),
          isCurrentMonth: true,
        });
      }


      const remainingDays = 42 - days.length;
      for (let i = 1; i <= remainingDays; i++) {
        const nextMonthDay = new Date(year, month + 1, i);
        days.push({
          date: nextMonthDay,
          isCurrentMonth: false,
        });
      }
      return days;
    };

    setDaysInMonth(getDays());
  }, [currentDate]);


  const getEventsForDay = (date) => {
    const dateString = date.toISOString().slice(0, 10);
    return events.filter((event) => event.date === dateString);
  };

  if (viewMode === "week" || viewMode === "grid") {
    return (
      <div className={'notImplemented'}>
        {viewMode === "week" ? "Week view " : "Grid view "} is not yet
        implemented. Showing month view.
      </div>
    );
  }

  return (
    <div className={'calendarContainer'}>
      <div className={'weekDays'}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className={'weekDayHeader'}>
            {day}
          </div>
        ))}
      </div>
      <div className={'daysGrid'}>
        {daysInMonth.map((dayInfo, index) => (
          <Day
            key={index}
            date={dayInfo.date}
            isCurrentMonth={dayInfo.isCurrentMonth}
            events={getEventsForDay(dayInfo.date)}
            isToday={dayInfo.date.toDateString() === new Date().toDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
