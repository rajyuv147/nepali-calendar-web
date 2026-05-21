"use client";

export default function TabNavigation({ activeTab, onTabChange }) {
    return (
        <div className="tabs">
            <button
                className={`tab-button ${activeTab === 'calendar' ? 'active' : ''}`}
                onClick={() => onTabChange('calendar')}
            >
                <span>📅</span> Calendar
            </button>
            <button
                className={`tab-button ${activeTab === 'converter' ? 'active' : ''}`}
                onClick={() => onTabChange('converter')}
            >
                <span>🔁</span> Converter
            </button>
            <button
                className={`tab-button ${activeTab === 'holidays' ? 'active' : ''}`}
                onClick={() => onTabChange('holidays')}
            >
                <span>🎉</span> Holidays
            </button>
        </div>
    );
}
