import dayjs from 'dayjs';

export function getGroupedEventsByLeague(events) {
  const group = {};
  events.forEach(event => {
    const { leagueId, leagueName, countryName, countryId, startDate } = event;
    const eventDate = dayjs(startDate).format('DD/MM/YYYY');

    if (!group[leagueId]) {
      return (group[leagueId] = {
        leagueId,
        leagueName,
        countryName,
        countryId,
        datesGroup: {
          [eventDate]: [event],
        },
      });
    }

    if (!group[leagueId].datesGroup[eventDate]) {
      return (group[leagueId].datesGroup[eventDate] = [event]);
    }
    group[leagueId].datesGroup[eventDate].push(event);
  });
  return group;
}

export function getGroupedEventsByDate(events) {
  const group = {};
  events.forEach(event => {
    const { leagueId, leagueName, countryName, countryId, startDate } = event;
    const eventDate = dayjs(startDate).format('DD/MM/YYYY');

    if (!group[eventDate]) {
      return (group[eventDate] = {
        leagueId,
        leagueName,
        countryName,
        countryId,
        events: [event],
      });
    }

    group[eventDate].events.push(event);
  });
  return group;
}
