import React from 'react';
import {
  EventRowScore__styled,
  EventRowTeamName__styled,
  EventRowTeams__styled,
  EventRowTeam__styled,
} from '../../../../components/EventRow/EventRow.styled';

const EventRowTeams = ({ T1, T2, score1, score2 }) => {
  return (
    <EventRowTeams__styled>
      <EventRowTeam__styled>
        <EventRowScore__styled>{score1 ?? '-'}</EventRowScore__styled>
        <EventRowTeamName__styled>{T1}</EventRowTeamName__styled>
      </EventRowTeam__styled>
      <EventRowTeam__styled>
        <EventRowScore__styled>{score2 ?? '-'}</EventRowScore__styled>
        <EventRowTeamName__styled>{T2}</EventRowTeamName__styled>
      </EventRowTeam__styled>
    </EventRowTeams__styled>
  );
};

export default EventRowTeams;
