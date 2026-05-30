import HolidaysView from '../../components/HolidaysView';

export const metadata = {
    title: "Nepal Holidays List 2081/2082/2083 | नेपालको पात्रो",
    description: "Complete list of public holidays, festivals, and events in Nepal for the year 2081, 2082, and 2083.",
    alternates: {
        canonical: 'https://calendarofnepal.com/holidays',
    },
};

export default function HolidaysPage() {
    return (
        <div className="w-full">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white font-nepali">चाडपर्व र बिदाहरू (Holidays)</h1>
            <HolidaysView />
        </div>
    );
}
