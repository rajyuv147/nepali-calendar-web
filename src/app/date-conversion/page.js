import ConverterView from '../../components/ConverterView';

export const metadata = {
    title: "Nepali Date Converter - BS to AD & AD to BS | नेपालको पात्रो",
    description: "Convert dates between Bikram Sambat (BS) and Gregorian (AD) calendars easily.",
    alternates: {
        canonical: 'https://calendarofnepal.com/date-conversion',
    },
};

export default function ConverterPage() {
    return (
        <div className="w-full">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white font-nepali">मिति रूपान्तरण (Date Converter)</h1>
            <ConverterView />
        </div>
    );
}
