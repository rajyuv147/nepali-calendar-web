import CalendarView from '../../components/CalendarView';

export const metadata = {
    title: "Nepali Calendar - Monthly View | नेपालको पात्रो",
    description: "View the full monthly Nepali Calendar (Nepali Patro) with events, festivals, and tithis.",
    alternates: {
        canonical: 'https://calendarofnepal.com/calendar',
    },
};

export default function CalendarPage() {
    return (
        <div className="w-full">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white font-nepali">नेपालको पात्रो (Calendar)</h1>
            <CalendarView />
        </div>
    );
}
