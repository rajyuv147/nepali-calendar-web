export default function PrivacyPolicy() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 md:p-8 transition-colors duration-200">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white">Privacy Policy</h1>

            <div className="prose prose-sm max-w-none text-gray-600 dark:text-slate-300 space-y-6">
                <p className="text-sm text-gray-400 dark:text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">1. Introduction</h2>
                    <p>
                        Welcome to Nepali Calendar (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy.
                        This Privacy Policy explains how we handle your information when you use our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">2. Information We Collect</h2>
                    <p>
                        <strong className="text-gray-800 dark:text-white">We do not collect any personal data.</strong> Our application is designed to function locally on your device.
                        Any data you input (such as custom events) is stored locally in your browser&apos;s storage (LocalStorage) and is never transmitted to our servers.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">3. Cookies and Local Storage</h2>
                    <p>
                        We use Local Storage to save your preferences and custom events. This data stays on your device.
                        We do not use cookies for tracking or advertising purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">4. Third-Party Services</h2>
                    <p>
                        Our website is hosted on Vercel. Vercel may collect anonymous usage logs for performance and security monitoring.
                        Please refer to Vercel&apos;s Privacy Policy for more information.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">5. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us.
                    </p>
                </section>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-800">
                <a href="/" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors">← Back to Calendar</a>
            </div>
        </div>
    );
}
