import { DateTime } from 'luxon'

export function getYear(date) {
  if(!date){
    return ''
  } else {
    return `(${DateTime.fromISO(date).year})`
  }
}