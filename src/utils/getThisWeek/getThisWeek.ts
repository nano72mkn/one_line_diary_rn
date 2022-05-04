import { addDays, subDays } from 'date-fns';

type ThisWeekType = {
  date: Date;
  week: number;
  isToday: boolean;
}[];

export const getThisWeek = (): ThisWeekType => {
  const thisWeek: ThisWeekType = [];
  const today = new Date();
  const weekDay = 7;
  const currentWeekDay = today.getDay();

  const startDate = subDays(today, currentWeekDay);

  for (let i = 0; i < weekDay; i++) {
    thisWeek.push({
      date: addDays(startDate, i),
      week: i,
      isToday: i === currentWeekDay,
    });
  }

  return thisWeek;
};
