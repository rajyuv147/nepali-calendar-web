"use client";

import { useState, useEffect, createContext, useContext } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('nepali_cal_dark_mode');
        if (saved === 'enabled') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }

        // Register Service Worker for PWA in production environment
        if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((reg) => {
                        console.log('[Service Worker] Registered successfully:', reg.scope);
                    })
                    .catch((err) => {
                        console.error('[Service Worker] Registration failed:', err);
                    });
            });
        }
    }, []);

    const toggle = () => {
        setIsDark(prev => {
            const next = !prev;
            if (next) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('nepali_cal_dark_mode', 'enabled');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('nepali_cal_dark_mode', 'disabled');
            }
            return next;
        });
    };

    return (
        <DarkModeContext.Provider value={{ isDark, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (!context) {
        return { isDark: false, toggle: () => {} };
    }
    return context;
}
