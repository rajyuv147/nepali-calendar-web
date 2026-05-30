"use client";

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_ITEMS = [
    {
        question: "How is the Bikram Sambat (BS) calendar different from the Gregorian (AD) calendar?",
        answer: "Bikram Sambat (BS) is the official solar-lunar calendar of Nepal. It is approximately 56 years and 8 months ahead of the Gregorian calendar (AD). While the Gregorian calendar relies purely on the solar cycle, Bikram Sambat incorporates both solar sidereal cycles and lunar phases (Tithis), which is why major festivals like Dashain and Tihar fall on different English calendar dates every year."
    },
    {
        question: "How do I convert a date from BS to AD or AD to BS?",
        answer: "You can convert dates instantly using our precision Date Converter tool. Navigate to the Converter page, choose either 'BS to AD' or 'AD to BS', select your desired year, month, and day, and our system will map the dates with absolute accuracy, taking leap years and varying Nepali month lengths into account."
    },
    {
        question: "Where is my calendar event data stored?",
        answer: "Your privacy is our highest priority. All custom events, notes, and user preferences are saved strictly in your browser's Local Storage on your physical device. We collect zero personal data, and no information is ever transmitted to a server or external database. It is 100% private and offline-compatible."
    },
    {
        question: "Does the calendar cover all public and cultural holidays in Nepal?",
        answer: "Yes! Our comprehensive Holidays page tracks national public holidays, bank holidays, and cultural festivals for the years 2080, 2081, 2082, and 2083 BS. This includes widespread celebrations like Dashain, Tihar, Teej, Chhath, Lhosar, Eid, Christmas, and regional holidays across different provinces."
    },
    {
        question: "What are Tithis and how are they represented in this Nepali Patro?",
        answer: "Tithis are lunar phases used in Hindu astrology and cultural calculations. A tithi represents the time it takes for the longitudinal angle between the Sun and Moon to increase by 12 degrees. Our Nepali Calendar maps these lunar days on a daily basis so you can easily keep track of festivals, fasting days (Ekadashi), and auspicious family ceremonies."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-slate-50 dark:bg-slate-950/40 py-16 px-4 border-t border-slate-100 dark:border-slate-800/80 transition-colors duration-200">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-950/20 border border-red-100/50 dark:border-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-4 select-none">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-serif">
                        Answers to Common Questions
                    </h2>
                    <p className="text-slate-650 dark:text-slate-400 text-sm mt-3 max-w-lg mx-auto">
                        Learn more about Bikram Sambat, date conversions, and how we keep your calendar data completely private.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                            >
                                <button
                                    id={`faq-btn-${idx}`}
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                                >
                                    <span className="font-semibold text-slate-800 dark:text-slate-100 text-base md:text-lg font-serif leading-tight">
                                        {item.question}
                                    </span>
                                    <span className="shrink-0 p-1.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-transform duration-300">
                                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    </span>
                                </button>
                                
                                <div
                                    className={`transition-all duration-300 ease-in-out ${
                                        isOpen ? 'max-h-80 border-t border-slate-50 dark:border-slate-800/60' : 'max-h-0'
                                    } overflow-hidden`}
                                >
                                    <div className="p-6 text-sm md:text-base text-slate-650 dark:text-slate-350 leading-relaxed bg-slate-50/50 dark:bg-slate-950/20">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
