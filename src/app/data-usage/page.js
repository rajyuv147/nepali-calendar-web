export default function DataUsagePolicy() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 md:p-8 transition-colors duration-200">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white">Data Usage Policy</h1>

            <div className="prose prose-sm max-w-none text-gray-600 dark:text-slate-300 space-y-6">
                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/50 rounded-xl p-4">
                    <p className="text-green-800 dark:text-green-300 font-medium m-0 flex items-center gap-2">
                        <span className="text-lg">✅</span>
                        No personal data is collected, stored, or shared by this application.
                    </p>
                </div>

                <section>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">Data Storage</h2>
                    <p>
                        All data related to your custom events and preferences is stored exclusively on your device using your browser&apos;s <strong className="text-gray-800 dark:text-white">Local Storage</strong>.
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-600 dark:text-slate-400">
                        <li>We do not have access to your data.</li>
                        <li>We cannot see your custom events.</li>
                        <li>We do not sell or share your data with third parties.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">Data Transmission</h2>
                    <p>
                        The application runs entirely in your browser. No user data is sent to any backend server.
                        The only network requests made are for loading the application resources (HTML, CSS, JavaScript).
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">Data Deletion</h2>
                    <p>
                        Since your data is stored locally, you have full control over it. You can delete your data at any time by:
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-600 dark:text-slate-400">
                        <li>Clearing your browser&apos;s cache and local storage.</li>
                        <li>Using the delete functionality within the application (for specific events).</li>
                    </ul>
                </section>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-800">
                <a href="/" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors">← Back to Calendar</a>
            </div>
        </div>
    );
}
