import { useDateFormat } from '@vueuse/core'

export const useFormatDate = (dates: string | string[]) => {
  if (Array.isArray(dates)) {
    dates.forEach((date) => {
      return useDateFormat(date, 'YYYY-MM-DD')
    })
  } else {
    return useDateFormat(dates, 'YYYY-MM-DD')
  }
}
