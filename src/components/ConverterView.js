"use client";

import { useState } from 'react';
import {
    bsToAd,
    adToBs,
    isValidBSDate,
    isValidADDate,
    toNepaliDigits
} from '../utils/converter';
import { NEPALI_MONTHS, getADMonthShort } from '../utils/calendar';

function InputField({ label, id, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-semibold text-gray-600 dark:text-slate-400 uppercase tracking-wide">
                {label}
            </label>
            <input
                id={id}
                type="number"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:border-transparent transition-all duration-200 text-base"
            />
        </div>
    );
}

function ResultCard({ result, isBS, error }) {
    if (error) {
        return (
            <div className="mt-4 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 flex items-center gap-3">
                <span className="text-red-500 text-xl">⚠️</span>
                <p className="text-red-600 dark:text-red-400 font-medium text-sm">{error}</p>
            </div>
        );
    }

    if (!result) return null;

    return (
        <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 border border-teal-200 dark:border-teal-800/50 transition-all duration-300">
            <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-2">Result</p>
            {isBS ? (
                <>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white font-nepali">
                        {toNepaliDigits(result.day)} {NEPALI_MONTHS[result.month - 1]}, {toNepaliDigits(result.year)}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                        {result.year}-{String(result.month).padStart(2, '0')}-{String(result.day).padStart(2, '0')} BS
                    </div>
                </>
            ) : (
                <>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {result.year}-{String(result.month).padStart(2, '0')}-{String(result.day).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                        {result.day} {getADMonthShort(result.month)} {result.year} AD
                    </div>
                </>
            )}
        </div>
    );
}

export default function ConverterView() {
    const [bsYear, setBsYear] = useState('');
    const [bsMonth, setBsMonth] = useState('');
    const [bsDay, setBsDay] = useState('');
    const [adYear, setAdYear] = useState('');
    const [adMonth, setAdMonth] = useState('');
    const [adDay, setAdDay] = useState('');
    const [bsResult, setBsResult] = useState(null);
    const [adResult, setAdResult] = useState(null);
    const [bsError, setBsError] = useState('');
    const [adError, setAdError] = useState('');

    const convertBsToAd = () => {
        const y = parseInt(bsYear);
        const m = parseInt(bsMonth);
        const d = parseInt(bsDay);

        if (!isValidBSDate(y, m, d)) {
            setBsError('Invalid BS date. Please check the year, month, and day.');
            setBsResult(null);
            return;
        }
        setBsError('');
        setBsResult(bsToAd(y, m, d));
    };

    const convertAdToBs = () => {
        const y = parseInt(adYear);
        const m = parseInt(adMonth);
        const d = parseInt(adDay);

        if (!isValidADDate(y, m, d)) {
            setAdError('Invalid AD date. Please check the year, month, and day.');
            setAdResult(null);
            return;
        }
        setAdError('');
        setAdResult(adToBs(y, m, d));
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* BS to AD Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 transition-all duration-200 hover:shadow-md dark:hover:shadow-slate-900/50">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white text-lg shadow-md">
                        🗓
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">BS → AD</h2>
                        <p className="text-xs text-gray-500 dark:text-slate-400">Bikram Sambat to Gregorian</p>
                    </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                    <InputField
                        label="Year"
                        id="bs-year"
                        placeholder="2081"
                        value={bsYear}
                        onChange={(e) => setBsYear(e.target.value)}
                    />
                    <InputField
                        label="Month"
                        id="bs-month"
                        placeholder="1–12"
                        value={bsMonth}
                        onChange={(e) => setBsMonth(e.target.value)}
                    />
                    <InputField
                        label="Day"
                        id="bs-day"
                        placeholder="1–32"
                        value={bsDay}
                        onChange={(e) => setBsDay(e.target.value)}
                    />
                </div>

                {/* Convert Button */}
                <button
                    id="btn-bs-to-ad"
                    onClick={convertBsToAd}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold text-sm hover:from-teal-600 hover:to-cyan-700 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    Convert to AD
                </button>

                {/* Result / Error */}
                <ResultCard result={bsResult} isBS={false} error={bsError} />
            </div>

            {/* AD to BS Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 transition-all duration-200 hover:shadow-md dark:hover:shadow-slate-900/50">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-lg shadow-md">
                        📅
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">AD → BS</h2>
                        <p className="text-xs text-gray-500 dark:text-slate-400">Gregorian to Bikram Sambat</p>
                    </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                    <InputField
                        label="Year"
                        id="ad-year"
                        placeholder="2024"
                        value={adYear}
                        onChange={(e) => setAdYear(e.target.value)}
                    />
                    <InputField
                        label="Month"
                        id="ad-month"
                        placeholder="1–12"
                        value={adMonth}
                        onChange={(e) => setAdMonth(e.target.value)}
                    />
                    <InputField
                        label="Day"
                        id="ad-day"
                        placeholder="1–31"
                        value={adDay}
                        onChange={(e) => setAdDay(e.target.value)}
                    />
                </div>

                {/* Convert Button */}
                <button
                    id="btn-ad-to-bs"
                    onClick={convertAdToBs}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold text-sm hover:from-purple-600 hover:to-indigo-700 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    Convert to BS
                </button>

                {/* Result / Error */}
                <ResultCard result={adResult} isBS={true} error={adError} />
            </div>

            {/* Info Banner */}
            <div className="lg:col-span-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl p-4 flex items-start gap-3">
                <span className="text-amber-500 text-lg mt-0.5">💡</span>
                <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                    <strong>Tip:</strong> Bikram Sambat (BS) is approximately 56 years and 8 months ahead of the Gregorian (AD) calendar. Supported range: BS 1970–2100 / AD 1913–2043.
                </p>
            </div>
        </div>
    );
}
