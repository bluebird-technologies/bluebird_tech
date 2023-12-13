/**
 * Get the default currency symbol for the current browser user
 */
export function getUserCurrency() {
    const { timeZone } = Intl?.DateTimeFormat()?.resolvedOptions() || {}
    if (timeZone.includes('Europe/London')) return '£'
    if (timeZone.includes('Europe')) return '€'
    if (timeZone.includes('Africa')) return 'R'
    return '$'
}
