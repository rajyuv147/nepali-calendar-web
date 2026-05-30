"use client";

import Link from 'next/link';
import { ShieldCheck, Lock, EyeOff, Server, RefreshCw, Mail, ArrowLeft, Database } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="relative overflow-hidden py-4">
            {/* Animated background blobs for premium feel */}
            <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-red-400/10 dark:bg-red-500/5 rounded-full blur-3xl animate-blob pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none"></div>

            <div className="relative z-10 space-y-8">
                {/* Hero Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 select-none shadow-[0_10px_20px_-5px_rgba(16,185,129,0.1)] dark:shadow-[0_10px_20px_-5px_rgba(16,185,129,0.2)]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>100% Privacy Guaranteed</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight font-serif tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        Last updated: May 2026
                    </p>
                </div>

                {/* Quick Summary Card */}
                <div className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200/50 dark:border-emerald-800/40 rounded-3xl p-6 md:p-8 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.05)] dark:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.15)] transition-all duration-300">
                    <div className="flex gap-4 items-start">
                        <div className="p-3 bg-emerald-500 dark:bg-emerald-600 rounded-2xl text-white shrink-0 shadow-lg shadow-emerald-500/20">
                            <Lock className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-serif">Our Privacy Philosophy</h2>
                            <p className="text-sm md:text-base text-slate-650 dark:text-slate-300 leading-relaxed">
                                We believe your data belongs to you. The Nepali Calendar (नेपालको पात्रो) application is designed to function <strong className="text-slate-800 dark:text-white font-semibold">entirely locally in your browser</strong>. We do not collect, transmit, store, track, or sell any of your personal information.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid of Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Section 1: Introduction */}
                    <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/80 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-100/50 dark:border-red-900/10">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-850 dark:text-white font-serif">1. Introduction</h3>
                        </div>
                        <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                            Welcome to Nepali Calendar. We are committed to protecting your privacy. This policy documents that our services do not log your identity, dates of interest, or custom calendar events.
                        </p>
                    </div>

                    {/* Section 2: Data Collection */}
                    <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/80 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100/50 dark:border-blue-900/10">
                                <EyeOff className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-850 dark:text-white font-serif">2. Zero Data Collected</h3>
                        </div>
                        <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                            We do not collect personal data. Any events you add or preferences you configure stay solely on your physical device. We have no databases, trackers, or cookies connected to your name or account.
                        </p>
                    </div>

                    {/* Section 3: Storage */}
                    <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/80 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-100/50 dark:border-amber-900/10">
                                <Database className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-850 dark:text-white font-serif">3. Local Browser Storage</h3>
                        </div>
                        <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                            Your custom notes and events reside exclusively in your browser's <strong className="text-slate-800 dark:text-white font-semibold">Local Storage</strong>. You remain in complete control and can erase this data at any moment by clearing your browser's cookies and site cache.
                        </p>
                    </div>

                    {/* Section 4: Hosting Infrastructure */}
                    <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/80 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-100/50 dark:border-indigo-900/10">
                                <Server className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-850 dark:text-white font-serif">4. Hosting Infrastructure</h3>
                        </div>
                        <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                            Our application is served globally via Vercel. Vercel collects completely anonymous telemetry logs (such as request rates and browser type) to optimize speed and protect against security attacks.
                        </p>
                    </div>

                    {/* Section 5: Policy Changes */}
                    <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/80 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-100/50 dark:border-purple-900/10">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-850 dark:text-white font-serif">5. Policy Updates</h3>
                        </div>
                        <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                            Should we ever adjust this policy, updates will be reflected directly on this page. Because we do not store emails or accounts, we recommend reviewing this policy periodically to stay fully informed.
                        </p>
                    </div>

                    {/* Section 6: Contact */}
                    <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/80 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 border border-teal-100/50 dark:border-teal-900/10">
                                <Mail className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-850 dark:text-white font-serif">6. Contact Support</h3>
                        </div>
                        <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">
                            If you have questions about how our local storage works, how to export your events, or general privacy concerns, feel free to open a thread or contact us at any time.
                        </p>
                    </div>
                </div>

                {/* Premium Action Row */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-slate-200/50 dark:border-slate-800/60">
                    <Link
                        id="back-to-calendar"
                        href="/"
                        className="group inline-flex items-center gap-2 text-sm font-bold text-slate-650 dark:text-slate-400 hover:text-red-650 dark:hover:text-red-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Calendar</span>
                    </Link>

                    <Link
                        id="data-usage-link"
                        href="/data-usage"
                        className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 bg-red-50 dark:bg-red-950/20 px-4 py-2 rounded-xl border border-red-100/30 dark:border-red-900/10 transition-colors"
                    >
                        Read Data Usage Policy →
                    </Link>
                </div>
            </div>
        </div>
    );
}
