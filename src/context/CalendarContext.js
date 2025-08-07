import React, { createContext, useState, useContext } from 'react';

import scheduledPostsData from '../data/event.json';
const CalendarContext = createContext();

export const useCalendar = () => useContext(CalendarContext);

export const CalendarProvider = ({ children }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [viewMode, setViewMode] = useState('month');
    const [showDialog, setShowDialog] = useState(false);
    const [detailDialog, setDetailDialog] = useState(false);

    const [events, setEvents] = useState(scheduledPostsData);

    const value = {
        currentDate,
        setCurrentDate,
        viewMode,
        setViewMode,
        events,
        showDialog,
        setShowDialog,
        detailDialog,
        setDetailDialog
    };

    return (
        <CalendarContext.Provider value={value}>
            {children}
        </CalendarContext.Provider>
    );
};