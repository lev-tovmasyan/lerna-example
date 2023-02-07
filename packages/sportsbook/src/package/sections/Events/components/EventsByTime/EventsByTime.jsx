import EventRow from '../../../../components/EventRow/EventRow';
import ExpansionPanel from '../../../../components/ExpansionPanel/ExpansionPanel';

const EventsByTime = ({
  eventsByTime,
  betslip,
  favouriteMarkets,
  onMarketFavourite,
}) => {
  return Object.keys(eventsByTime).map((date, i) => (
    <ExpansionPanel key={date} date={date} isOpen={i < 3}>
      {eventsByTime[date].events.map(event => {
        return (
          <EventRow
            key={event.id}
            event={event}
            betslip={betslip}
            favouriteMarkets={favouriteMarkets}
            onMarketFavourite={onMarketFavourite}
          />
        );
      })}
    </ExpansionPanel>
  ));
};

export default EventsByTime;
