import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: "Privacy Policy | नेपालको पात्रो - Nepali Calendar",
    description: "Your privacy is our priority. Nepali Calendar (नेपालको पात्रो) runs entirely locally on your device. We collect zero personal information.",
    alternates: {
        canonical: 'https://calendarofnepal.com/privacy',
    },
};

export default function PrivacyLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
            <Header />
            <main className="flex-1 container mx-auto max-w-3xl py-8 px-4">
                {children}
            </main>
            <Footer />
        </div>
    );
}
