import Link from 'next/link';

export default function SEOContent() {
    return (
        <section className="bg-white dark:bg-slate-900 py-12 px-4 border-t border-gray-100 dark:border-slate-800 transition-colors duration-200">
            <div className="container mx-auto max-w-4xl prose prose-red">
                <article>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 font-nepali">About Nepali Calendar (नेपालको पात्रो)</h2>
                    <p className="text-gray-600 dark:text-slate-300 mb-6">
                        Welcome to the most accurate and user-friendly <strong>Nepali Calendar (Nepali Patro)</strong>.
                        Our digital platform serves as your daily companion for keeping track of <strong>Bikram Sambat (BS)</strong> dates,
                        upcoming festivals, public holidays, and auspicious occasions (Tithis) in Nepal.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 font-nepali">Why use our Nepali Date Converter?</h3>
                    <p className="text-gray-600 dark:text-slate-300 mb-6">
                        Our <Link href="/date-conversion" className="text-red-650 dark:text-red-400 hover:underline">Nepali Date Converter</Link> tool
                        is designed for precision and speed. Whether you need to convert your birthday from <strong>AD to BS</strong>
                        or check the English date for a specific Nepali event (<strong>BS to AD</strong>), our converter provides
                        instant results. It supports a wide range of years, making it perfect for official document verification,
                        visa processing, and personal planning.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 font-nepali">Upcoming Festivals and Holidays</h3>
                    <p className="text-gray-600 dark:text-slate-300 mb-6">
                        Nepal is a land of festivals. Stay updated with major celebrations like <strong>Dashain</strong>,
                        <strong>Tihar</strong>, <strong>Chhath</strong>, <strong>Lhosar</strong>, and <strong>Holi</strong>.
                        Our comprehensive <Link href="/holidays" className="text-red-650 dark:text-red-400 hover:underline">Holidays List</Link>
                        covers all government holidays, bank holidays, and cultural events for the years 2080, 2081, 2082, and 2083.
                        Never miss a celebration with our reliable festival calendar.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 font-nepali">The Significance of Bikram Sambat</h3>
                    <p className="text-gray-600 dark:text-slate-300 mb-6">
                        <strong>Bikram Sambat (BS)</strong> is the official calendar of Nepal, established by King Vikramaditya.
                        It is approximately 56 years and 8 months ahead of the Gregorian Calendar (AD). Understanding the
                        Nepali calendar is essential for cultural integration, religious observances, and daily life in Nepal.
                        Our platform bridges the gap between the traditional lunar-based system and the modern solar calendar.
                    </p>

                    <div className="bg-gray-50 dark:bg-slate-950/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 mt-8">
                        <h4 className="font-bold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-650 dark:text-slate-300">
                            <li><strong>Accurate Nepali Patro:</strong> Daily updates with Tithi and Nakshatra.</li>
                            <li><strong>Date Conversion:</strong> Seamless BS to AD and AD to BS conversion.</li>
                            <li><strong>Event Planning:</strong> Track marriage dates (Bibah), Bratabandha, and Pasni.</li>
                            <li><strong>Multi-device Support:</strong> Fully responsive design for mobile and desktop.</li>
                            <li><strong>Privacy Focused:</strong> No data collection, works locally.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
}
