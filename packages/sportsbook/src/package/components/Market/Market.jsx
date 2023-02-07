import CorrectScore from '../CorrectScore/CorrectScore';
import Odd from '../UI/Odd/Odd';
import {
  MarketBody__styled,
  MarketCorrectScoreItem__styled,
  MarketCorrectScore__styled,
} from './Market.styled';
import PlayerSpecials from '../PlayerSpecials/PlayerSpecials';
import {
  MARKET_BY_CODE,
  OPTIONAL_MARKETS_CODES,
} from '../../../constants/sports.constants';
import { useMemo } from 'react';

const Market = ({
  market,
  correctScore,
  onOddClick,
  oneMinute,
  playerSpecials,
  betslip,
}) => {
  const names =
    market.ns?.split(',') || MARKET_BY_CODE[market.code]?.prices || [];

  const isOptional = OPTIONAL_MARKETS_CODES.includes(market.code);

  const filteredNames = useMemo(() => {
    if (!isOptional) {
      return names;
    }
    const existNames = market.odds.map(odd => odd.name || odd.n);
    return names.filter(name => existNames.includes(name));
  }, [names, isOptional]);

  const oddsGroups = market.odds.reduce((acc, b) => {
    const odd = { ...b };
    if (market.h && !odd.h) {
      odd.h = market.h;
    }
    acc[odd.name] = odd;
    return acc;
  }, {});

  return (
    <MarketBody__styled
      oneMinute={oneMinute}
      key={market.id + (market.h || '0')}>
      {playerSpecials ? (
        <PlayerSpecials />
      ) : correctScore ? (
        <MarketCorrectScore__styled>
          <MarketCorrectScoreItem__styled>
            <CorrectScore />
          </MarketCorrectScoreItem__styled>
          <MarketCorrectScoreItem__styled>
            <Odd
              oddsCount={1}
              progress={false}
              name={'0:0'}
              coefficient={4.2}
              market={market}
            />
          </MarketCorrectScoreItem__styled>
          <MarketCorrectScoreItem__styled>
            <CorrectScore />
          </MarketCorrectScoreItem__styled>
        </MarketCorrectScore__styled>
      ) : (
        filteredNames.map(name => {
          const odd = oddsGroups[name] || {};
          const rowCount = filteredNames.length <= 3 ? filteredNames.length : 3;

          return (
            <Odd
              key={name}
              withHandicap
              handicap={market.h}
              data={odd}
              onOddClick={onOddClick}
              coefficient={odd.rate}
              lastCoefficient={odd.lv}
              oddsCount={rowCount}
              name={name}
              market={market}
              checked={betslip[odd.ref]}
            />
          );
        })
      )}
    </MarketBody__styled>
  );
};

export default Market;
