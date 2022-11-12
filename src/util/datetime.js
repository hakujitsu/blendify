import { format, intervalToDuration, isWithinInterval, subMonths } from 'date-fns'
import pluralize from 'pluralize'

export const convertMsToSongDuration = (ms) => {
  const duration = intervalToDuration({ start: 0, end: ms })

  const zeroPad = (num) => String(num).padStart(2, '0')

  if (duration.hours) {
    return [
      duration.hours,
      zeroPad(duration.minutes),
      zeroPad(duration.seconds),
    ].join(':')
  } else {
    return [
      duration.minutes,
      zeroPad(duration.seconds),
    ].join(':')
  }
}

export const getDateAddedString = (dateString) => {
  const dateAdded = new Date(dateString)
  const currentDate = new Date();
  const oneMonthAgo = subMonths(currentDate, 1)

  if (isWithinInterval(dateAdded, {
    start: oneMonthAgo,
    end: currentDate
  })) {
    const duration = intervalToDuration({
      start: dateAdded,
      end: currentDate
    })
    if (duration.days) {
      return `${duration.days} ${pluralize("day", duration.days)} ago`
    } else if (duration.hours) {
      return `${duration.hours} ${pluralize("hour", duration.hours)} ago`
    } else if (duration.minutes) {
      return `${duration.minutes} ${pluralize("minute", duration.minutes)} ago`
    } else if (duration.seconds) {
      return `${duration.seconds} ${pluralize("second", duration.seconds)} ago`
    }
    throw Error("Date Formatting Error")

  } else {
    return format(dateAdded, "MMM d, Y")
  }
}