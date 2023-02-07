import EventRow from '../../../../components/EventRow/EventRow';
import ExpansionPanel from '../../../../components/ExpansionPanel/ExpansionPanel';

const EventsByLeague = ({
  eventsByLeague,
  betslip,
  favouriteMarkets,
  onMarketFavourite,
}) => {
  return eventsByLeague.map((league, i) => (
    <ExpansionPanel
      key={league.leagueId}
      name={`${league.leagueName}, ${league.countryName}`}
      league
      countryId={league.countryId}
      isOpen={i < 3}>
      {Object.keys(league.datesGroup).map(date => (
        <ExpansionPanel key={date} date={date}>
          {league.datesGroup[date].map(event => (
            <EventRow
              key={event.id}
              event={event}
              betslip={betslip}
              favouriteMarkets={favouriteMarkets}
              onMarketFavourite={onMarketFavourite}
            />
          ))}
        </ExpansionPanel>
      ))}
    </ExpansionPanel>
  ));
};

export default EventsByLeague;
