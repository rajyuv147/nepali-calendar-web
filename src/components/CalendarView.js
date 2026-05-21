"use client";

import { useState, useEffect } from 'react';
import {
    getCurrentBSDate,
    toNepaliDigits,
    bsToAd,
    getDaysInBSMonth
} from '../utils/converter';
import {
    NEPALI_MONTHS,
    NEPALI_DAYS,
    ENGLISH_MONTHS,
    getFirstDayOfMonth,
    getADMonthShort,
    getHoliday
} from '../utils/calendar';
import { useEvents } from '../hooks/useEvents';

export default function CalendarView() {
    const [currentYear, setCurrentYear] = useState(2081);
    const [currentMonth, setCurrentMonth] = useState(1);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const [newEventName, setNewEventName] = useState('');
    const { hasEvents, getEventsForDate, addEvent, deleteEvent } = useEvents();

    // Initialize with current date
    useEffect(() => {
        const today = getCurrentBSDate();
        setCurrentYear(today.year);
        setCurrentMonth(today.month);
    }, []);

    const handlePrevMonth = () => {
        let newMonth = currentMonth - 1;
        let newYear = currentYear;
        if (newMonth < 1) {
            newMonth = 12;
            newYear -= 1;
        }
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const handleNextMonth = () => {
        let newMonth = currentMonth + 1;
        let newYear = currentYear;
        if (newMonth > 12) {
            newMonth = 1;
            newYear += 1;
        }
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const handleYearChange = (e) => {
        setCurrentYear(parseInt(e.target.value));
    };

    const handleMonthChange = (e) => {
        setCurrentMonth(parseInt(e.target.value));
    };

    const handleAddEvent = () => {
        if (!newEventName.trim()) {
            alert('Please enter an event name');
            return;
        }
        const success = addEvent(selectedDate.year, selectedDate.month, selectedDate.day, newEventName.trim());
        if (success) {
            setNewEventName('');
        } else {
            alert('Failed to save event');
        }
    };

    const renderCalendarGrid = () => {
        const days = [];
        const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);
        const totalDays = getDaysInBSMonth(currentYear, currentMonth);
        const today = getCurrentBSDate();

        // Empty cells
        for (let i = 0; i < firstDayIndex; i++) {
            days.push(<div key={`empty-${i}`} className="bg-gray-50/50 rounded-xl min-h-[80px]"></div>);
        }

        // Days
        for (let day = 1; day <= totalDays; day++) {
            const isToday = currentYear === today.year && currentMonth === today.month && day === today.day;
            const holiday = getHoliday(currentYear, currentMonth, day);
            const hasCustomEvent = hasEvents(currentYear, currentMonth, day);
            const adDate = bsToAd(currentYear, currentMonth, day);

            // Compute day of week (0 = Sunday, 6 = Saturday)
            const dayOfWeek = (firstDayIndex + day - 1) % 7;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

            let className = "relative p-4 rounded-xl border transition-all duration-300 cursor-pointer min-h-[80px] flex flex-col group";

            if (isToday) {
                className += " bg-gray-100 border-gray-400 text-gray-900 shadow ring-2 ring-gray-300/50 dark:bg-slate-850 dark:border-slate-650 dark:text-white dark:ring-slate-700/50";
            } else if (holiday || isWeekend) {
                className += " border-red-500 bg-red-50/20 hover:border-red-650 hover:bg-red-50/50 dark:border-red-500/40 dark:bg-red-950/10 dark:hover:border-red-500 dark:hover:bg-red-950/20";
            } else if (hasCustomEvent) {
                className += " bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-400 dark:from-slate-900 dark:to-indigo-950/30 dark:border-blue-900 dark:hover:border-blue-600";
            } else {
                className += " border-gray-200 hover:border-red-300 bg-white dark:border-slate-800 dark:hover:border-red-500/50 dark:bg-slate-950";
            }

            days.push(
                <div
                    key={day}
                    className={className}
                    title={holiday ? holiday.name : ''}
                    onClick={() => {
                        setSelectedDate({ year: currentYear, month: currentMonth, day });
                        setIsEventModalOpen(true);
                    }}
                >
                    <div className={`text-3xl font-bold mb-auto ${isToday ? 'text-gray-900 dark:text-white' : (holiday || isWeekend) ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-slate-100'}`}>
                        {toNepaliDigits(day)}
                    </div>
                    <div className={`text-xs mt-2 ${isToday ? 'text-gray-600 dark:text-slate-300 font-medium' : (holiday || isWeekend) ? 'text-red-400 dark:text-red-300/80' : 'text-gray-500 dark:text-slate-400'}`}>
                        {day} {getADMonthShort(adDate.month)}
                    </div>
                    {(holiday || hasCustomEvent) && (
                        <div className={`absolute top-3 right-3 w-2.5 h-2.5 rounded-full ${isToday ? 'bg-slate-400 dark:bg-slate-500' : hasCustomEvent ? 'bg-blue-500' : 'bg-red-500'} shadow-lg`}></div>
                    )}
                    {holiday && !isToday && (
                        <div className="absolute bottom-2 left-2 right-2 text-[10px] text-red-600 dark:text-red-450 font-medium truncate opacity-0 group-hover:opacity-100 transition-opacity">
                            {holiday.name}
                        </div>
                    )}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 transition-all duration-200">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                <button
                    onClick={handlePrevMonth}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/60 transition-colors cursor-pointer"
                >
                    ◀
                </button>

                <div className="flex gap-3">
                    <select
                        value={currentMonth}
                        onChange={handleMonthChange}
                        className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent cursor-pointer"
                    >
                        {ENGLISH_MONTHS.map((month, index) => (
                            <option key={index} value={index + 1}>
                                {month} ({NEPALI_MONTHS[index]})
                            </option>
                        ))}
                    </select>
                    <select
                        value={currentYear}
                        onChange={handleYearChange}
                        className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent cursor-pointer"
                    >
                        {Array.from({ length: 101 }, (_, i) => 2000 + i).map(year => (
                            <option key={year} value={year}>
                                {toNepaliDigits(year)}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleNextMonth}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/60 transition-colors cursor-pointer"
                >
                    ▶
                </button>
            </div>

            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white font-nepali">
                    {NEPALI_MONTHS[currentMonth - 1]} {toNepaliDigits(currentYear)}
                </h2>
                <p className="text-gray-500 dark:text-slate-400 mt-1">{ENGLISH_MONTHS[currentMonth - 1]} {currentYear}</p>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
                {NEPALI_DAYS.map(day => (
                    <div key={day} className="text-center font-bold text-red-600 dark:text-red-400 py-2 bg-red-50 dark:bg-red-950/20 rounded-lg text-sm font-nepali">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {renderCalendarGrid()}
            </div>

            {selectedDate && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-100 dark:border-blue-900/40 text-center transition-all">
                    <span className="text-blue-800 dark:text-blue-300 font-medium">Selected: </span>
                    <span className="text-blue-900 dark:text-blue-200 font-bold font-nepali">
                        {toNepaliDigits(selectedDate.day)} {NEPALI_MONTHS[selectedDate.month - 1]}, {toNepaliDigits(selectedDate.year)}
                    </span>
                    <button
                        onClick={() => setIsEventModalOpen(true)}
                        className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer active:scale-95"
                    >
                        Manage Events
                    </button>
                </div>
            )}

            {/* Custom Events Management Modal */}
            {isEventModalOpen && selectedDate && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-350">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden p-6 relative border border-gray-100 dark:border-slate-800 animate-in fade-in zoom-in duration-200 text-gray-900 dark:text-slate-100">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-slate-800">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-nepali">कार्यक्रम व्यवस्थापन (Manage Events)</h3>
                                <p className="text-sm text-gray-500 dark:text-slate-400 mt-1 font-nepali">
                                    {toNepaliDigits(selectedDate.day)} {NEPALI_MONTHS[selectedDate.month - 1]}, {toNepaliDigits(selectedDate.year)}
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    setIsEventModalOpen(false);
                                    setNewEventName('');
                                }}
                                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-650 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Holiday Info if any */}
                        {(() => {
                            const holiday = getHoliday(selectedDate.year, selectedDate.month, selectedDate.day);
                            const dayOfWeek = (getFirstDayOfMonth(selectedDate.year, selectedDate.month) + selectedDate.day - 1) % 7;
                            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                            if (holiday || isWeekend) {
                                return (
                                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 rounded-2xl border border-red-100 dark:border-red-900/30 flex items-start gap-3">
                                        <span className="text-2xl">🎉</span>
                                        <div>
                                            <h4 className="font-bold text-red-800 dark:text-red-350 font-nepali">
                                                {holiday ? holiday.name : 'साप्ताहिक बिदा (Weekly Holiday)'}
                                            </h4>
                                            <p className="text-xs text-red-650 dark:text-red-400 mt-0.5 font-nepali">
                                                {holiday ? (holiday.type === 'festival' ? 'चाडपर्व' : 'सार्वजनिक बिदा') : 'शनिबार/आइतबार साप्ताहिक बिदा'}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                            return null;
                        })()}

                        {/* Custom Events List */}
                        <div className="mb-6">
                            <h4 className="font-bold text-gray-750 dark:text-slate-350 mb-3 font-nepali text-sm">थपिएका कार्यक्रमहरू (My Events)</h4>
                            {(() => {
                                const customEvents = getEventsForDate(selectedDate.year, selectedDate.month, selectedDate.day);
                                if (customEvents.length > 0) {
                                    return (
                                        <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                                            {customEvents.map((event, index) => (
                                                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-950 hover:bg-gray-100 dark:hover:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 transition-colors">
                                                    <span className="text-sm font-medium text-gray-800 dark:text-slate-200 font-nepali">{event.name}</span>
                                                    <button
                                                        onClick={() => {
                                                            if (confirm(`Delete event "${event.name}"?`)) {
                                                                deleteEvent(selectedDate.year, selectedDate.month, selectedDate.day, index);
                                                            }
                                                        }}
                                                        className="text-xs text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium hover:bg-red-50 dark:hover:bg-red-950/20 px-2 py-1 rounded-lg transition-all cursor-pointer"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                }
                                return (
                                    <p className="text-sm text-gray-500 dark:text-slate-400 italic py-2.5 text-center bg-gray-50 dark:bg-slate-950 rounded-xl border border-dashed border-gray-200 dark:border-slate-800">
                                        कुनै कार्यक्रम थपिएको छैन (No events added)
                                    </p>
                                );
                            })()}
                        </div>

                        {/* Add Event Form */}
                        <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                            <h4 className="font-bold text-gray-755 dark:text-slate-350 font-nepali text-sm">नयाँ कार्यक्रम थप्नुहोस् (Add New Event)</h4>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="कार्यक्रमको नाम (e.g., Birthday)"
                                    value={newEventName}
                                    onChange={(e) => setNewEventName(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleAddEvent();
                                        }
                                    }}
                                    className="flex-1 px-4 py-2 text-sm rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-gray-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-nepali"
                                />
                                <button
                                    onClick={handleAddEvent}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

