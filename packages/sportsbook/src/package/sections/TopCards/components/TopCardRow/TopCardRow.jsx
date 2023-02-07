import dayjs from 'dayjs';
import FavoriteButton from '../../../../components/FavoriteButton/FavoriteButton';
import Flag from '../../../../components/UI/Flag/Flag';
import Odd from '../../../../components/UI/Odd/Odd';
import {
  TopEventsBody__styled,
  TopEventsChartIcon__styled,
  TopEventsChartSvg__styled,
  TopEventsChart__styled,
  TopEventsCountryFlag__styled,
  TopEventsFavorite__styled,
  TopEventsFooter__styled,
  TopEventsHead__styled,
  TopEventsItem__styled,
  TopEventsLigueName__styled,
  TopEventsSportIcon__styled,
  TopEventsSportSvg__styled,
  TopEventsTeams__styled,
  TopEventsTime__styled,
} from '../../TopCards.styled';
import sportsSprite from '../../../../assets/images/sprites/sportsSprite.svg';
import { openPopup } from '../../../../../redux/reducers/popups/popups.slice';
import { POPUPS_IDS } from '../../../../components/Popups/configs/popup.configs';
import { useDispatch } from 'react-redux';

const TopCardRow = ({ event, betslip, onEventClick, onOddClick }) => {
  const dispatch = useDispatch();
  const {
    id: eventId,
    countryName,
    leagueName,
    name,
    countryId,
    info,
    startDate,
    markets,
    sportId,
  } = event;

  const { T1, T2 } = info;

  const visibleMarket = markets[0] || {};

  const odds = visibleMarket.odds || [];

  const onOdd = (odd, market) => {
    onOddClick({
      ...odd,
      eventId: event.id,
      T1,
      T2,
      marketName: market.name,
      marketCode: market.code,
    });
  };

  const openStatistic = e => {
    e.stopPropagation();
    dispatch(
      openPopup({ id: POPUPS_IDS.STATISTIC, eventId, team1: T1, team2: T2 }),
    );
  };

  return (
    <TopEventsItem__styled onClick={() => onEventClick(event)}>
      <TopEventsHead__styled>
        <TopEventsFavorite__styled>
          <FavoriteButton />
        </TopEventsFavorite__styled>
        <TopEventsSportIcon__styled>
          <TopEventsSportSvg__styled>
            <use xlinkHref={`${sportsSprite}#${event.sportId}`} />
          </TopEventsSportSvg__styled>
        </TopEventsSportIcon__styled>
        <TopEventsTime__styled>
          {dayjs(startDate).format('DD/MM')} <span />
          {dayjs(startDate).format('HH:mm')}
        </TopEventsTime__styled>
        <TopEventsCountryFlag__styled>
          <Flag id={countryId} />
        </TopEventsCountryFlag__styled>
        <TopEventsLigueName__styled className={'ellipsis'}>
          {leagueName || name} <span /> {countryName}
        </TopEventsLigueName__styled>
      </TopEventsHead__styled>
      <TopEventsBody__styled>
        <TopEventsTeams__styled>
          <span>{T1}</span>
          <span>{T2}</span>
        </TopEventsTeams__styled>
        {sportId === 50 && (
          <TopEventsChart__styled>
            <TopEventsChartIcon__styled onClick={openStatistic}>
              <TopEventsChartSvg__styled>
                <use xlinkHref={'#chart'} />
              </TopEventsChartSvg__styled>
            </TopEventsChartIcon__styled>
            {/* <TopEventsLive__styled>Live</TopEventsLive__styled> */}
          </TopEventsChart__styled>
        )}
      </TopEventsBody__styled>
      <TopEventsFooter__styled>
        {odds.map(odd => (
          <Odd
            key={odd.ref}
            data={odd}
            oddsCount={odds.length}
            name={odd.name}
            coefficient={odd.rate}
            checked={betslip[odd.ref]}
            market={visibleMarket}
            onOddClick={onOdd}
          />
        ))}
      </TopEventsFooter__styled>
    </TopEventsItem__styled>
  );
};

export default TopCardRow;
