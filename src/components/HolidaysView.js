"use client";

import { useState } from 'react';
import holidaysData from '../data/holidays.json';
import { NEPALI_MONTHS, ENGLISH_MONTHS } from '../utils/calendar';
import { toNepaliDigits, bsToAd } from '../utils/converter';

const HOLIDAY_TYPE_STYLES = {
    public: {
        border: 'border-l-red-500',
        badge: 'bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400',
        dot: 'bg-red-500',
        label: 'Public',
        icon: '🏛️',
    },
    national: {
        border: 'border-l-blue-500',
        badge: 'bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400',
        dot: 'bg-blue-500',
        label: 'National',
        icon: '🇳🇵',
    },
    religious: {
        border: 'border-l-amber-500',
        badge: 'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400',
        dot: 'bg-amber-500',
        label: 'Religious',
        icon: '🙏',
    },
    festival: {
        border: 'border-l-purple-500',
        badge: 'bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-400',
        dot: 'bg-purple-500',
        label: 'Festival',
        icon: '🎉',
    },
};

function getTypeStyle(type) {
    return HOLIDAY_TYPE_STYLES[type] || HOLIDAY_TYPE_STYLES.festival;
}

export default function HolidaysView() {
    const [selectedYear, setSelectedYear] = useState(2081);

    const handleYearChange = (e) => {
        setSelectedYear(parseInt(e.target.value));
    };

    const yearHolidays = holidaysData[selectedYear];

    const allHolidays = yearHolidays
        ? Object.keys(yearHolidays)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .flatMap(month => {
                const monthNum = parseInt(month);
                const monthHolidays = yearHolidays[month];
                const days = Object.keys(monthHolidays).map(Number).sort((a, b) => a - b);
                return days.map(day => {
                    const holidayData = monthHolidays[day];
                    return {
                        month: monthNum,
                        day,
                        name: typeof holidayData === 'string' ? holidayData : holidayData.name,
                        type: typeof holidayData === 'string' ? 'festival' : holidayData.type,
                        adDate: bsToAd(selectedYear, monthNum, day),
                    };
                });
            })
        : [];

    // Group by month
    const grouped = allHolidays.reduce((acc, h) => {
        if (!acc[h.month]) acc[h.month] = [];
        acc[h.month].push(h);
        return acc;
    }, {});

    const YEARS = [2080, 2081, 2082, 2083];

    return (
        <div className="space-y-6">
            {/* Controls */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-200">
                <div>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Showing holidays for</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {toNepaliDigits(selectedYear)} BS
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {YEARS.map(y => (
                        <button
                            key={y}
                            id={`year-btn-${y}`}
                            onClick={() => setSelectedYear(y)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                selectedYear === y
                                    ? 'bg-red-600 text-white shadow-md scale-105'
                                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                            }`}
                        >
                            {y}
                        </button>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3">
                {Object.entries(HOLIDAY_TYPE_STYLES).map(([type, style]) => (
                    <div key={type} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${style.badge}`}>
                        <span>{style.icon}</span>
                        <span>{style.label}</span>
                    </div>
                ))}
            </div>

            {/* No data */}
            {!yearHolidays && (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-12 text-center">
                    <p className="text-4xl mb-4">📭</p>
                    <p className="text-gray-500 dark:text-slate-400 font-medium">No holiday data available for {selectedYear}.</p>
                </div>
            )}

            {/* Month Groups */}
            {Object.keys(grouped)
                .sort((a, b) => parseInt(a) - parseInt(b))
                .map(month => {
                    const monthNum = parseInt(month);
                    const holidays = grouped[month];
                    return (
                        <div key={month} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden transition-colors duration-200">
                            {/* Month Header */}
                            <div className="px-5 py-3.5 bg-gradient-to-r from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
                                <div>
                                    <span className="text-base font-bold text-gray-900 dark:text-white">
                                        {ENGLISH_MONTHS[monthNum - 1]}
                                    </span>
                                    <span className="ml-2 text-sm text-gray-500 dark:text-slate-400 font-nepali">
                                        ({NEPALI_MONTHS[monthNum - 1]})
                                    </span>
                                </div>
                                <span className="text-xs font-semibold bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 px-2.5 py-1 rounded-full">
                                    {holidays.length} holiday{holidays.length !== 1 ? 's' : ''}
                                </span>
                            </div>

                            {/* Holiday Items */}
                            <div className="divide-y divide-gray-50 dark:divide-slate-800">
                                {holidays.map((h, idx) => {
                                    const style = getTypeStyle(h.type);
                                    const adDateStr = `${h.adDate.year}-${String(h.adDate.month).padStart(2, '0')}-${String(h.adDate.day).padStart(2, '0')}`;
                                    return (
                                        <div
                                            key={idx}
                                            className={`flex items-center gap-4 px-5 py-4 border-l-4 ${style.border} hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors duration-150 group`}
                                        >
                                            {/* Icon */}
                                            <div className="text-xl flex-shrink-0">{style.icon}</div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-gray-900 dark:text-white text-sm leading-tight truncate group-hover:text-clip">
                                                    {h.name}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 font-nepali">
                                                    {toNepaliDigits(h.day)} {NEPALI_MONTHS[h.month - 1]}, {toNepaliDigits(selectedYear)}
                                                </p>
                                            </div>

                                            {/* Right side */}
                                            <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                                                <span className="text-xs font-mono text-gray-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                                                    {adDateStr}
                                                </span>
                                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${style.badge}`}>
                                                    {style.label}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

            {/* Summary Footer */}
            {yearHolidays && (
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl p-4 text-center">
                    <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                        🇳🇵 Total of <strong>{allHolidays.length}</strong> public holidays in {selectedYear} BS
                    </p>
                </div>
            )}
        </div>
    );
}
