import { useState, useEffect } from 'react';

const EVENTS_STORAGE_KEY = 'nepali_calendar_custom_events';

export function useEvents() {
    const [events, setEvents] = useState({});

    // Load events on mount
    useEffect(() => {
        try {
            const eventsJson = localStorage.getItem(EVENTS_STORAGE_KEY);
            if (eventsJson) {
                setEvents(JSON.parse(eventsJson));
            }
        } catch (error) {
            console.error('Error loading custom events:', error);
        }
    }, []);

    // Save events helper
    const saveEvents = (newEvents) => {
        try {
            localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(newEvents));
            setEvents(newEvents);
            return true;
        } catch (error) {
            console.error('Error saving custom events:', error);
            return false;
        }
    };

    const addEvent = (year, month, day, eventName) => {
        const newEvents = { ...events };

        // Create nested structure if needed
        if (!newEvents[year]) newEvents[year] = {};
        if (!newEvents[year][month]) newEvents[year][month] = {};
        if (!newEvents[year][month][day]) newEvents[year][month][day] = [];

        // Add event to the array
        newEvents[year][month][day].push({
            name: eventName,
            createdAt: new Date().toISOString()
        });

        return saveEvents(newEvents);
    };

    const getEventsForDate = (year, month, day) => {
        if (events[year] && events[year][month] && events[year][month][day]) {
            return events[year][month][day];
        }
        return [];
    };

    const deleteEvent = (year, month, day, eventIndex) => {
        const newEvents = { ...events };

        if (newEvents[year] && newEvents[year][month] && newEvents[year][month][day]) {
            newEvents[year][month][day].splice(eventIndex, 1);

            // Clean up empty structures
            if (newEvents[year][month][day].length === 0) {
                delete newEvents[year][month][day];
            }
            if (Object.keys(newEvents[year][month]).length === 0) {
                delete newEvents[year][month];
            }
            if (Object.keys(newEvents[year]).length === 0) {
                delete newEvents[year];
            }

            return saveEvents(newEvents);
        }
        return false;
    };

    const hasEvents = (year, month, day) => {
        const dateEvents = getEventsForDate(year, month, day);
        return dateEvents.length > 0;
    };

    return {
        events,
        addEvent,
        getEventsForDate,
        deleteEvent,
        hasEvents
    };
}
