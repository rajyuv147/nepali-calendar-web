import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-8 pb-4 mt-auto transition-colors duration-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-slate-150 mb-2 font-nepali">नेपालको पात्रो</h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400">
                            Your trusted companion for Nepali dates, festivals, and events.
                            Accurate, privacy-focused, and easy to use.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="font-semibold text-gray-800 dark:text-slate-200 mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-400">
                            <li><Link href="/calendar" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Calendar</Link></li>
                            <li><Link href="/date-conversion" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Date Converter</Link></li>
                            <li><Link href="/holidays" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Holidays List</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="text-center md:text-right">
                        <h4 className="font-semibold text-gray-800 dark:text-slate-200 mb-3">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-400">
                            <li><Link href="/privacy-policy" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/data-usage" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Data Usage</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-800 pt-4 text-center text-xs text-gray-500 dark:text-slate-500">
                    <p>© {currentYear} Nepali Calendar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
