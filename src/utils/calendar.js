import { bsToAd } from './converter';
import holidaysData from '../data/holidays.json';

/**
 * Nepali Calendar Utilities
 */

// Nepali month names
export const NEPALI_MONTHS = [
    'बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज',
    'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फागुन', 'चैत'
];

// Nepali day names (starting from Sunday)
export const NEPALI_DAYS = ['आइत', 'सोम', 'मंगल', 'बुध', 'बिहि', 'शुक्र', 'शनि'];

// English month names for reference
export const ENGLISH_MONTHS = [
    'Baisakh', 'Jestha', 'Ashar', 'Shrawan', 'Bhadra', 'Ashwin',
    'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
];

/**
 * Get the day of week for the first day of a BS month
 * Uses AD conversion to determine the day
 */
export function getFirstDayOfMonth(year, month) {
    const adDate = bsToAd(year, month, 1);
    const date = new Date(adDate.year, adDate.month - 1, adDate.day);
    return date.getDay(); // 0 = Sunday, 1 = Monday, etc.
}

/**
 * Get short AD month name
 */
export function getADMonthShort(month) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month - 1];
}

/**
 * Check if a date is a holiday
 */
export function getHoliday(year, month, day) {
    if (holidaysData[year] && holidaysData[year][month] && holidaysData[year][month][day]) {
        const holidayData = holidaysData[year][month][day];
        // Handle both old string format and new object format
        if (typeof holidayData === 'string') {
            return { name: holidayData, type: 'festival' };
        }
        return holidayData;
    }
    return null;
}
