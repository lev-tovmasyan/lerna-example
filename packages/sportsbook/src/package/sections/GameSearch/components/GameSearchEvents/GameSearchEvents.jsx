import SearchEventRow from './components/SearchEventRow/SearchEventRow';
import {
  SearchEvents__styled,
  SearchEventsBody__styled,
  SearchEventsClose__styled,
  SearchEventsCount__styled,
  SearchEventsHead__styled,
  SearchEventsList__styled,
  SearchEventsNoEvents__styled,
  SearchEventsLoading__styled,
} from './GameSearchEvents.styled';
import Notification from '../../../../components/Notification/Notification';
import ButtonLoader from '../../../../components/UI/Button/ButtonLoader/ButtonLoader';

const GameSearchEvents = ({ searchEvents, onEventClick }) => {
  const { events, isLoading } = searchEvents;

  const allEvents = events.reduce((acc, b) => [...acc, ...b.events], []);

  return (
    <SearchEvents__styled>
      {!isLoading && (
        <SearchEventsHead__styled>
          <SearchEventsCount__styled>Events</SearchEventsCount__styled>
          <SearchEventsClose__styled>
            {allEvents.length} Results
          </SearchEventsClose__styled>
        </SearchEventsHead__styled>
      )}
      <SearchEventsBody__styled>
        {!isLoading &&
          (events.length ? (
            <SearchEventsList__styled>
              {events.map(league =>
                league.events.map(event => (
                  <SearchEventRow
                    key={event.id}
                    countryId={league.countryId}
                    event={event}
                    onEventClick={onEventClick}
                    league={league.name}
                    country={league.countryName}
                    sportId={league.sportId}
                  />
                )),
              )}
            </SearchEventsList__styled>
          ) : (
            <SearchEventsNoEvents__styled>
              <Notification text="No Events By Search Name" />
            </SearchEventsNoEvents__styled>
          ))}
        {isLoading && (
          <SearchEventsLoading__styled>
            <ButtonLoader />
          </SearchEventsLoading__styled>
        )}
      </SearchEventsBody__styled>
    </SearchEvents__styled>
  );
};

export default GameSearchEvents;
