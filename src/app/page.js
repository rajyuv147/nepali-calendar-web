"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, ArrowLeftRight, Award, Clock, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import SEOContent from '../components/SEOContent';
import { getCurrentBSDate, toNepaliDigits } from '../utils/converter';
import { NEPALI_MONTHS, getHoliday } from '../utils/calendar';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [todayBS, setTodayBS] = useState({ year: 2083, month: 2, day: 8 });
  const [todayADStr, setTodayADStr] = useState('');
  const [holidayInfo, setHolidayInfo] = useState(null);

  useEffect(() => {
    const bsDate = getCurrentBSDate();
    setTodayBS(bsDate);

    // Format English date
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setTodayADStr(now.toLocaleDateString('en-US', options));

    // Holiday info
    const holiday = getHoliday(bsDate.year, bsDate.month, bsDate.day);
    setHolidayInfo(holiday);

    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-200">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Sleek & SaaS-like */}
        <section className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-24 md:py-32 px-4 overflow-hidden border-b border-slate-200/50 dark:border-slate-900/50 transition-colors duration-200">
          {/* Subtle Radial Glow & Mesh Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.07),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.12),transparent)] pointer-events-none"></div>

          <div className="container mx-auto max-w-5xl text-center relative z-10">
            {/* Hero Premium Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/20 border border-red-100/50 dark:border-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-6 select-none shadow-[0_15px_30px_-10px_rgba(220,38,38,0.15)] dark:shadow-[0_15px_30px_-10px_rgba(220,38,38,0.25)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              🇳🇵 Complete Calendar & Converter Suite
            </div>



            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 font-nepali leading-tight tracking-tight text-slate-900 dark:text-white">
              नेपालको पात्रो
            </h1>

            <p className="text-2xl md:text-4xl font-serif font-medium mb-6 text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed tracking-wide">
              Calendar of Nepal
            </p>

            <p className="text-base md:text-lg mb-10 text-slate-650 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Your digital companion for Bikram Sambat dates, festivals, and holidays.
              Beautifully designed with Nepali culture at heart, built for modern performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/calendar"
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_8px_30px_rgba(220,38,38,0.22)] shadow-[0_8px_30px_rgba(220,38,38,0.12)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5 text-white/95" />
                <span>View Calendar</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://chromewebstore.google.com/detail/hkajmbocfbajpknncimimgffjnpbhifg?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900 text-slate-850 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-850 transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <svg className="w-5 h-5 text-red-500/80 dark:text-red-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="21.17" y1="8" x2="12" y2="8" />
                  <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                  <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                </svg>
                <span>Add Extension</span>
              </a>
            </div>
          </div>
        </section>

        {/* Live Overview Dashboard Card */}
        <div className="max-w-4xl mx-auto -mt-8 mb-16 px-4 relative z-20">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/80 p-6 md:p-8 rounded-3xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]">
            {!mounted ? (
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 h-12 animate-pulse">
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-full md:w-1/3"></div>
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-full md:w-1/3"></div>
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-full md:w-1/4"></div>
              </div>
            ) : (
              <div className="w-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800/80 gap-6 md:gap-0 items-center justify-between">
                {/* BS Date */}
                <div className="flex items-center gap-4 w-full md:w-1/3 pb-4 md:pb-0 md:pr-6 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Today in Bikram Sambat</p>
                    <p className="text-lg font-bold text-slate-850 dark:text-white font-nepali">
                      {toNepaliDigits(todayBS.day)} {NEPALI_MONTHS[todayBS.month - 1]} {toNepaliDigits(todayBS.year)}
                    </p>
                  </div>
                </div>

                {/* AD Date */}
                <div className="flex items-center gap-4 w-full md:w-1/3 py-4 md:py-0 md:px-6 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">English Date (Gregorian)</p>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {todayADStr}
                    </p>
                  </div>
                </div>

                {/* Holiday / Event */}
                <div className="flex items-center gap-4 w-full md:w-1/3 pt-4 md:pt-0 md:pl-6 justify-center md:justify-start">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    holidayInfo
                      ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400'
                      : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {holidayInfo ? <Sparkles className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Today's Event</p>
                    {holidayInfo ? (
                      <p className="text-sm font-bold text-amber-600 dark:text-amber-400 line-clamp-1">
                        {holidayInfo.name}
                      </p>
                    ) : (
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        No Public Holiday
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section - Clean Border Cards & Lucide Icons */}
        <section className="py-16 px-4 bg-slate-50/50 dark:bg-slate-950/30 transition-colors duration-200">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-nepali">हाम्रा विशेषताहरू</h2>
              <p className="text-lg text-slate-650 dark:text-slate-400 max-w-2xl mx-auto">Powerful features designed to keep you connected with Nepali dates and events.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Calendar */}
              <div className="group relative bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-red-500/20 dark:hover:border-red-500/20 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 mb-6 group-hover:scale-105 transition-transform duration-300 border border-red-100/50 dark:border-red-900/10">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-850 dark:text-white mb-3">Nepali Calendar</h3>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Complete monthly view with Tithis, public holidays, cultural events, and English date mappings. Easily navigate across months.
                  </p>
                </div>
                <Link href="/calendar" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 group-hover:text-red-750 dark:group-hover:text-red-300 transition-colors gap-1.5 mt-auto">
                  <span>Explore Calendar</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Feature 2: Converter */}
              <div className="group relative bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-105 transition-transform duration-300 border border-blue-100/50 dark:border-blue-900/10">
                    <ArrowLeftRight className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-850 dark:text-white mb-3">Date Converter</h3>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Instantly convert dates between Bikram Sambat (BS) and Gregorian (AD) calendars with precise, high-accuracy custom mapping.
                  </p>
                </div>
                <Link href="/date-conversion" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 group-hover:text-blue-750 dark:group-hover:text-blue-300 transition-colors gap-1.5 mt-auto">
                  <span>Convert Date</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Feature 3: Holidays */}
              <div className="group relative bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-amber-500/20 dark:hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 mb-6 group-hover:scale-105 transition-transform duration-300 border border-amber-100/50 dark:border-amber-900/10">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-850 dark:text-white mb-3">Festivals & Holidays</h3>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Never miss a cultural event or festival. Access a comprehensive list of all national, regional, and seasonal holidays in Nepal.
                  </p>
                </div>
                <Link href="/holidays" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 group-hover:text-amber-750 dark:group-hover:text-amber-300 transition-colors gap-1.5 mt-auto">
                  <span>Discover Holidays</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-white dark:bg-slate-950 transition-colors duration-200">
          <div className="container mx-auto max-w-5xl">
            <div className="relative bg-slate-900 dark:bg-slate-900/40 border border-slate-850 dark:border-slate-800/60 rounded-3xl py-12 px-6 md:p-16 text-center shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_70%)] pointer-events-none"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to explore?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Experience the most user-friendly, clean, and accurate Nepali Calendar application on the web.
              </p>
              <Link
                href="/calendar"
                className="inline-flex bg-red-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                Go to Calendar
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ JSON-LD Schema for AEO/SEO Search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How is the Bikram Sambat (BS) calendar different from the Gregorian (AD) calendar?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bikram Sambat (BS) is the official solar-lunar calendar of Nepal. It is approximately 56 years and 8 months ahead of the Gregorian calendar (AD). While the Gregorian calendar relies purely on the solar cycle, Bikram Sambat incorporates both solar sidereal cycles and lunar phases (Tithis), which is why major festivals like Dashain and Tihar fall on different English calendar dates every year.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How do I convert a date from BS to AD or AD to BS?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can convert dates instantly using our precision Date Converter tool. Navigate to the Converter page, choose either \'BS to AD\' or \'AD to BS\', select your desired year, month, and day, and our system will map the dates with absolute accuracy, taking leap years and varying Nepali month lengths into account.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Where is my calendar event data stored?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your privacy is our highest priority. All custom events, notes, and user preferences are saved strictly in your browser\'s Local Storage on your physical device. We collect zero personal data, and no information is ever transmitted to a server or external database. It is 100% private and offline-compatible.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Does the calendar cover all public and cultural holidays in Nepal?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! Our comprehensive Holidays page tracks national public holidays, bank holidays, and cultural festivals for the years 2080, 2081, 2082, and 2083 BS. This includes widespread celebrations like Dashain, Tihar, Teej, Chhath, Lhosar, Eid, Christmas, and regional holidays across different provinces.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What are Tithis and how are they represented in this Nepali Patro?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tithis are lunar phases used in Hindu astrology and cultural calculations. A tithi represents the time it takes for the longitudinal angle between the Sun and Moon to increase by 12 degrees. Our Nepali Calendar maps these lunar days on a daily basis so you can easily keep track of festivals, fasting days (Ekadashi), and auspicious family ceremonies.'
                  }
                }
              ]
            })
          }}
        />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* SEO Content */}
        <SEOContent />
      </main>

      <Footer />
    </div>
  );
}
