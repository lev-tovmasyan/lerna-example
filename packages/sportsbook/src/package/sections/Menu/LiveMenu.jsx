import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu__styled,
  MenuBody__styled,
  MenuHead__styled,
  MenuSportList__styled,
} from './Menu.styled';
import MenuSportSkeleton from './components/MenuSport/MenuSport.skeleton';
import { LOADING_ITEMS } from '../../helpers/utils';
import LiveMenuSport from './components/MenuSport/LiveMenuSport';
import LiveMenuLeague from './components/MenuLeague/LiveMenuLeague';
import LiveEventRow from '../Events/components/LiveEventRow/LiveEventRow';

const LiveMenu = ({
  title,
  sports = {},
  events = {},
  isLoading,
  onEventClick,
}) => {
  const sportIds = Object.keys(sports);

  return (
    <Menu__styled>
      {title && <MenuHead__styled>{title}</MenuHead__styled>}
      <MenuBody__styled>
        <MenuSportList__styled>
          {isLoading
            ? LOADING_ITEMS.map((_, i) => <MenuSportSkeleton key={i} />)
            : sportIds?.map((sportId, i) => {
                const countryIds = Object.keys(sports[sportId]).filter(
                  id => id && id !== '99999',
                );
                if (!sportId || !countryIds.length) {
                  return null;
                }
                return (
                  <LiveMenuSport key={sportId} id={sportId} open={!i}>
                    {countryIds.map(countryId => {
                      const country = sports[sportId][countryId];
                      const leagueIds = Object.keys(country).filter(
                        id => id && id !== '99999',
                      );
                      return leagueIds.map((leagueId, leagueIndex) => {
                        if (!events[country[leagueId][0]]?.inf) {
                          return null;
                        }
                        return (
                          <LiveMenuLeague
                            key={leagueId}
                            id={leagueId}
                            name={events[country[leagueId][0]]?.inf}
                            countryId={countryId}
                            open={leagueIndex < 3}>
                            {country[leagueId]?.map(eventId => {
                              // eslint-disable-next-line no-unused-vars
                              const { markets, marketsGroup, ...event } =
                                events[eventId] || {};
                              if (!markets || !event.t1) {
                                return null;
                              }
                              return (
                                <LiveEventRow
                                  simple
                                  key={eventId}
                                  event={event}
                                  countryId={countryId}
                                  onEventClick={onEventClick}
                                />
                              );
                            })}
                          </LiveMenuLeague>
                        );
                      });
                    })}
                  </LiveMenuSport>
                );
              })}
        </MenuSportList__styled>
      </MenuBody__styled>
    </Menu__styled>
  );
};

LiveMenu.propTypes = {
  title: PropTypes.string,
  sports: PropTypes.object,
  events: PropTypes.object,
  isLoading: PropTypes.bool,
  onEventClick: PropTypes.func,
};

export default LiveMenu;
