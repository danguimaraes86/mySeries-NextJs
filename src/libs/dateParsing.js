import { DateTime } from 'luxon'

export function getYear(date) {
  if(!date){
    return ''
  } else {
    return `(${DateTime.fromISO(date).year})`
  }
}

export function dateLocale(date){
  if(!date){
    return ''
  } else {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)
  }
}