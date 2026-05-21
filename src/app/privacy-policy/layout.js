import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicyLayout({ children }) {
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
