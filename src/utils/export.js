/**
 * iCal (.ics) and Google Calendar Event Export Utilities
 * Handles formatting, escaping, and triggering downloads client-side.
 */

/**
 * Formats a date object { year, month, day } into YYYYMMDD string.
 */
export function formatICSDate(d) {
    const yy = String(d.year).padStart(4, '0');
    const mm = String(d.month).padStart(2, '0');
    const dd = String(d.day).padStart(2, '0');
    return `${yy}${mm}${dd}`;
}

/**
 * Gets the next day as a { year, month, day } object.
 * Required for iCalendar all-day events where the end date is exclusive (start_date + 1 day).
 */
export function getNextDayDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    };
}

/**
 * Escapes reserved characters in iCalendar fields.
 */
function escapeICSField(str) {
    if (!str) return '';
    return str
        .replace(/\\/g, '\\\\')
        .replace(/,/g, '\\,')
        .replace(/;/g, '\\;')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '');
}

/**
 * Generates an iCalendar (.ics) format string.
 * @param {Array} events Array of events, where each event has:
 *   - summary: string
 *   - description: string (optional)
 *   - startDate: { year, month, day }
 *   - endDate: { year, month, day }
 */
export function generateICS(events) {
    const ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Nepali Calendar//EN',
        'CALSCALE:GREGORIAN'
    ];

    const now = new Date();
    const dtstamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    events.forEach((event, index) => {
        const uid = `${Date.now()}-${index}-${Math.random().toString(36).substr(2, 9)}@nepalicalendar.web`;
        const startStr = formatICSDate(event.startDate);
        const endStr = formatICSDate(event.endDate);

        ics.push('BEGIN:VEVENT');
        ics.push(`UID:${uid}`);
        ics.push(`DTSTAMP:${dtstamp}`);
        ics.push(`DTSTART;VALUE=DATE:${startStr}`);
        ics.push(`DTEND;VALUE=DATE:${endStr}`);
        ics.push(`SUMMARY:${escapeICSField(event.summary)}`);
        if (event.description) {
            ics.push(`DESCRIPTION:${escapeICSField(event.description)}`);
        }
        ics.push('END:VEVENT');
    });

    ics.push('END:VCALENDAR');
    return ics.join('\r\n');
}

/**
 * Triggers a client-side download of a generated .ics file.
 */
export function downloadICS(filename, events) {
    if (typeof window === 'undefined') return;
    
    const icsContent = generateICS(events);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/**
 * Generates a pre-filled Google Calendar event template URL.
 * @param {string} summary - The event title
 * @param {object} startDate - { year, month, day }
 * @param {object} endDate - { year, month, day }
 * @param {string} description - The event description
 */
export function getGoogleCalendarUrl(summary, startDate, endDate, description) {
    const startStr = formatICSDate(startDate);
    const endStr = formatICSDate(endDate);
    
    const baseUrl = 'https://calendar.google.com/calendar/render';
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: summary,
        dates: `${startStr}/${endStr}`,
    });
    
    if (description) {
        params.append('details', description);
    }
    
    return `${baseUrl}?${params.toString()}`;
}
