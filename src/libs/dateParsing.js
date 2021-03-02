import { DateTime } from 'luxon'

export function getYear(date) {
  return DateTime.fromISO(date).year
}