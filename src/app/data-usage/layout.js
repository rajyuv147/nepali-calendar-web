import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: "Data Usage & Storage Policy | नेपालको पात्रो - Nepali Calendar",
    description: "Learn how we handle local data, cookies, and local storage. The Nepali Calendar operates 100% locally in your browser with zero server data transmissions.",
    alternates: {
        canonical: 'https://calendarofnepal.com/data-usage',
    },
};

export default function DataUsageLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 transition-colors duration-200">
            <Header />
            <main className="flex-1 container mx-auto max-w-3xl py-8 px-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}
