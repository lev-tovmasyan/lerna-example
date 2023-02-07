import dayjs from 'dayjs';

export const getUpcomingDates = () => {
  const dates = [];
  for (let i = 0; i < 8; i++) {
    const date = dayjs(Date.now() + i * 8.64e7);
    dates.push({
      title: i ? date.format('ddd') : 'Today',
      day: date.format('DD/MM'),
      full: date,
    });
  }
  dates.push({
    title: 'ALL',
    full: 'all',
  });
  return dates;
};
