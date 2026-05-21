"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getCurrentBSDate, toNepaliDigits } from '../utils/converter';
import { NEPALI_MONTHS } from '../utils/calendar';
import { useDarkMode } from '../hooks/useDarkMode';
import { Home, Calendar, ArrowLeftRight, Award, Sun, Moon, Clock } from 'lucide-react';

export default function Header() {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const pathname = usePathname();
    const { isDark, toggle } = useDarkMode();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const timeStr = `${toNepaliDigits(hours)}:${toNepaliDigits(minutes)}:${toNepaliDigits(seconds)}`;

            const bsDate = getCurrentBSDate();
            const dateStr = `${toNepaliDigits(bsDate.day)} ${NEPALI_MONTHS[bsDate.month - 1]}, ${toNepaliDigits(bsDate.year)}`;

            setCurrentTime(timeStr);
            setCurrentDate(dateStr);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const isActive = (path) => pathname === path;

    return (
        <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-200">
            <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Logo & Brand */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-95 transition-all group">
                        <img src="/logo.png" alt="नेपालको पात्रो" className="h-9 w-auto dark:brightness-110 group-hover:scale-105 transition-transform" />
                        <div className="flex flex-col border-l border-slate-200 dark:border-slate-800 pl-3">
                            <span className="font-bold text-sm text-slate-800 dark:text-white leading-none">नेपालको पात्रो</span>
                            <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold tracking-wider uppercase leading-none mt-1">Nepali Calendar</span>
                        </div>
                    </Link>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-2 md:hidden">
                        {mounted && currentTime && (
                            <div className="text-[11px] font-mono font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 px-2.5 py-1 rounded-lg border border-red-100/50 dark:border-red-900/20">
                                {currentTime}
                            </div>
                        )}
                        <button
                            onClick={toggle}
                            className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-350 transition-all cursor-pointer"
                            aria-label="Toggle theme"
                        >
                            {mounted && (isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex items-center gap-1.5 bg-slate-100/80 dark:bg-slate-950/60 p-1 rounded-2xl w-full md:w-auto overflow-x-auto scrollbar-none border border-slate-200/30 dark:border-slate-800/40">
                    <Link
                        href="/"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                            isActive('/')
                                ? 'bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 shadow-[0_2px_8px_-2px_rgba(220,38,38,0.12)] border border-red-500/10 dark:border-red-400/10 hover:scale-[1.02]'
                                : 'text-slate-650 dark:text-slate-400 hover:bg-white/40 dark:hover:bg-slate-900/40 hover:text-slate-900 dark:hover:text-slate-100 hover:scale-[1.02]'
                        }`}
                    >
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/calendar"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                            isActive('/calendar')
                                ? 'bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 shadow-[0_2px_8px_-2px_rgba(220,38,38,0.12)] border border-red-500/10 dark:border-red-400/10 hover:scale-[1.02]'
                                : 'text-slate-650 dark:text-slate-400 hover:bg-white/40 dark:hover:bg-slate-900/40 hover:text-slate-900 dark:hover:text-slate-100 hover:scale-[1.02]'
                        }`}
                    >
                        <Calendar className="w-4 h-4" />
                        <span>Calendar</span>
                    </Link>
                    <Link
                        href="/date-conversion"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                            isActive('/date-conversion')
                                ? 'bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 shadow-[0_2px_8px_-2px_rgba(220,38,38,0.12)] border border-red-500/10 dark:border-red-400/10 hover:scale-[1.02]'
                                : 'text-slate-650 dark:text-slate-400 hover:bg-white/40 dark:hover:bg-slate-900/40 hover:text-slate-900 dark:hover:text-slate-100 hover:scale-[1.02]'
                        }`}
                    >
                        <ArrowLeftRight className="w-4 h-4" />
                        <span>Converter</span>
                    </Link>
                    <Link
                        href="/holidays"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                            isActive('/holidays')
                                ? 'bg-white dark:bg-slate-800 text-red-600 dark:text-red-400 shadow-[0_2px_8px_-2px_rgba(220,38,38,0.12)] border border-red-500/10 dark:border-red-400/10 hover:scale-[1.02]'
                                : 'text-slate-650 dark:text-slate-400 hover:bg-white/40 dark:hover:bg-slate-900/40 hover:text-slate-900 dark:hover:text-slate-100 hover:scale-[1.02]'
                        }`}
                    >
                        <Award className="w-4 h-4" />
                        <span>Holidays</span>
                    </Link>
                </nav>

                {/* Right Side: Info & Theme Toggle */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Live Time Badge */}
                    {mounted && currentTime && (
                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gray-100/80 dark:bg-slate-950/60 border border-gray-150/40 dark:border-slate-800/40 text-xs font-semibold text-gray-700 dark:text-slate-350">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            <span>{currentDate}</span>
                            <span className="text-gray-300 dark:text-slate-800">|</span>
                            <span className="font-mono text-red-600 dark:text-red-400">{currentTime}</span>
                        </div>
                    )}

                    <button
                        onClick={toggle}
                        className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-slate-950 hover:bg-gray-200 dark:hover:bg-slate-850 text-gray-700 dark:text-slate-350 transition-all border border-gray-200/40 dark:border-slate-800/60 shadow-sm cursor-pointer"
                        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </header>
    );
}
