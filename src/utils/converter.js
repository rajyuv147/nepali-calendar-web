/**
 * Nepali Calendar Date Converter
 * Converts between Bikram Sambat (BS) and Gregorian (AD) calendars
 * 
 * Reference: November 25, 2025 AD = Mangsir 9, 2082 BS
 * Using verified conversion data
 */

// BS month data: number of days in each month for years 2000-2100 BS
export const BS_MONTH_DATA = {
    2000: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2001: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2002: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2003: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2004: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2005: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2006: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2007: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2008: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    2009: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2010: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2011: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2012: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2013: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2014: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2015: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2016: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2017: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2018: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2019: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2020: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2021: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2022: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2023: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2024: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2025: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2026: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2027: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2028: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2029: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    2030: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2031: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2032: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2033: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2034: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2035: [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    2036: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2037: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2038: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2039: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2040: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2041: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2042: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2043: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2044: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2045: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2046: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2047: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2048: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2049: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2050: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2051: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2052: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2053: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2054: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2055: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2056: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    2057: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2058: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2059: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2060: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2061: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2062: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
    2063: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2064: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2065: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2066: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    2067: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2068: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2069: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2070: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    2071: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2072: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2073: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    2074: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2075: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2077: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    2078: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    2081: [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    2082: [31, 31, 32, 31, 32, 30, 30, 29, 29, 29, 31, 30],
    2083: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    2084: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    2085: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    2086: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    2087: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    2088: [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    2089: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    2090: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    2091: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    2092: [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    2093: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    2094: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    2095: [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
    2096: [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    2097: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    2098: [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31],
    2099: [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30],
    2100: [31, 32, 31, 32, 30, 31, 30, 29, 30, 29, 30, 30]
};

// Verified reference: Nov 25, 2025 AD = Mangsir 9, 2082 BS (month 8, day 9)
const BS_REFERENCE = { year: 2082, month: 8, day: 9 };
const AD_REFERENCE = { year: 2025, month: 11, day: 25 };

/**
 * Get total days in a BS year
 */
export function getTotalDaysInBSYear(year) {
    if (!BS_MONTH_DATA[year]) return 365;
    return BS_MONTH_DATA[year].reduce((sum, days) => sum + days, 0);
}

/**
 * Get days in a specific BS month
 */
export function getDaysInBSMonth(year, month) {
    if (!BS_MONTH_DATA[year]) return 30;
    return BS_MONTH_DATA[year][month - 1] || 30;
}

/**
 * Check if AD year is leap year
 */
export function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Get days in AD month
 */
export function getDaysInADMonth(year, month) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) return 29;
    return daysInMonth[month - 1];
}

/**
 * Calculate days difference between two AD dates
 */
export function daysBetweenAD(fromYear, fromMonth, fromDay, toYear, toMonth, toDay) {
    const from = new Date(fromYear, fromMonth - 1, fromDay);
    const to = new Date(toYear, toMonth - 1, toDay);
    const diffTime = to - from;
    return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Add days to a BS date
 */
export function addDaysToBS(year, month, day, daysToAdd) {
    let currentYear = year;
    let currentMonth = month;
    let currentDay = day + daysToAdd;

    // Normalize forward
    while (currentDay > getDaysInBSMonth(currentYear, currentMonth)) {
        currentDay -= getDaysInBSMonth(currentYear, currentMonth);
        currentMonth++;
        if (currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
        }
    }

    // Normalize backward
    while (currentDay < 1) {
        currentMonth--;
        if (currentMonth < 1) {
            currentMonth = 12;
            currentYear--;
        }
        currentDay += getDaysInBSMonth(currentYear, currentMonth);
    }

    return { year: currentYear, month: currentMonth, day: currentDay };
}

/**
 * Add days to an AD date
 */
export function addDaysToAD(year, month, day, daysToAdd) {
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + daysToAdd);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    };
}

/**
 * Convert BS date to AD date
 */
export function bsToAd(bsYear, bsMonth, bsDay) {
    // Calculate days from reference BS date
    let daysDiff = 0;

    // 1. Calculate days difference between years (Start of bsYear - Start of RefYear)
    if (bsYear > BS_REFERENCE.year) {
        for (let y = BS_REFERENCE.year; y < bsYear; y++) {
            daysDiff += getTotalDaysInBSYear(y);
        }
    } else if (bsYear < BS_REFERENCE.year) {
        for (let y = bsYear; y < BS_REFERENCE.year; y++) {
            daysDiff -= getTotalDaysInBSYear(y);
        }
    }

    // 2. Calculate days from Start of bsYear to TargetDate
    let daysInTarget = 0;
    for (let m = 1; m < bsMonth; m++) {
        daysInTarget += getDaysInBSMonth(bsYear, m);
    }
    daysInTarget += bsDay - 1;

    // 3. Calculate days from Start of RefYear to RefDate
    let daysInRef = 0;
    for (let m = 1; m < BS_REFERENCE.month; m++) {
        daysInRef += getDaysInBSMonth(BS_REFERENCE.year, m);
    }
    daysInRef += BS_REFERENCE.day - 1;

    // 4. Total difference
    const totalDaysDiff = daysDiff + daysInTarget - daysInRef;

    // Add to reference AD date
    return addDaysToAD(AD_REFERENCE.year, AD_REFERENCE.month, AD_REFERENCE.day, totalDaysDiff);
}

/**
 * Convert AD date to BS date
 */
export function adToBs(adYear, adMonth, adDay) {
    // Calculate days from reference AD date
    const daysDiff = daysBetweenAD(
        AD_REFERENCE.year, AD_REFERENCE.month, AD_REFERENCE.day,
        adYear, adMonth, adDay
    );

    // Add to reference BS date
    return addDaysToBS(BS_REFERENCE.year, BS_REFERENCE.month, BS_REFERENCE.day, daysDiff);
}

/**
 * Get current BS date
 */
export function getCurrentBSDate() {
    const now = new Date();
    return adToBs(now.getFullYear(), now.getMonth() + 1, now.getDate());
}

/**
 * Validate BS date
 */
export function isValidBSDate(year, month, day) {
    if (year < 2000 || year > 2100) return false;
    if (month < 1 || month > 12) return false;
    const maxDay = getDaysInBSMonth(year, month);
    if (day < 1 || day > maxDay) return false;
    return true;
}

/**
 * Validate AD date
 */
export function isValidADDate(year, month, day) {
    if (year < 1943 || year > 2043) return false;
    if (month < 1 || month > 12) return false;
    const maxDay = getDaysInADMonth(year, month);
    if (day < 1 || day > maxDay) return false;
    return true;
}

/**
 * Convert English digits to Nepali digits
 */
export function toNepaliDigits(number) {
    const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return String(number).split('').map(digit => {
        return nepaliDigits[digit] || digit;
    }).join('');
}
