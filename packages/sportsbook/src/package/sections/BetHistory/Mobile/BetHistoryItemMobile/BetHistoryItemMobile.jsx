import React, { useMemo, useState } from 'react';
import {
  Body__styled,
  BodyRow__styled,
  Cashout__styled,
  CashoutButton__styled,
  Collapse__styled,
  CollapseIcon__styled,
  Game__styled,
  GameBody__styled,
  GameDate__styled,
  GameHead__styled,
  GameInfo__styled,
  Games__styled,
  GameStatusIcon__styled,
  GameTeam__styled,
  GameTeams__styled,
  GameTeamScore__styled,
  GameTeamScoreItem__styled,
  Head__styled,
  HeadId__styled,
  HeadIdCircle__styled,
  HeadStatus__styled,
  Item__styled,
  GameTeamIcon__styled,
} from '../BetHistoryMobile.styled';
import dayjs from 'dayjs';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import sportsSprite from '../../../../assets/images/sprites/sportsSprite.svg';
import {
  BET_TYPES,
  TICKET_STATUSES,
} from '../../constants/betHistory.constants';
import { updateBalance } from '../../../../../redux/reducers/auth/auth.slice';
import Button from '../../../../components/UI/Button/Button';
import { getBetslipBonusPercent } from '../../../Betslip/helpers/betslip.helpers';

const BetHistoryItemMobile = ({ data, getBetHistory, isBonusAvailable }) => {
  const { kind, events, maxRate, status } = data;
  const [gamesOpened, setGamesOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation(['translation', 'betSlip']);

  const possibleWinning = data.maxRate * data.amount;
  const wonAmount = data.wonAmount;

  function handleCashOut() {
    setIsLoading(true);
    axios
      .post('/sportsbook/cashout', {
        ticketId: data.id,
        amount: data.cashout,
        accept: false,
      })
      .then(({ currentBalance, displayBalance }) => {
        dispatch(updateBalance({ balance: currentBalance, displayBalance }));
        setIsLoading(false);
        getBetHistory();
      })
      .catch(() => {
        getBetHistory();
      });
  }

  const eventsWithoutReturns = useMemo(
    () => events.filter(item => item.odds[0].status !== 2),
    [events],
  );

  const isBonusExist = useMemo(() => {
    if (
      !isBonusAvailable ||
      kind !== 2 ||
      ![0, 3].includes(status) ||
      eventsWithoutReturns.length < 5
    ) {
      return false;
    }
    return !eventsWithoutReturns.some(item => item.odds[0].rate < 1.11);
  }, [kind, eventsWithoutReturns, status]);

  const bonusPercent =
    isBonusExist && getBetslipBonusPercent(eventsWithoutReturns.length);
  const bonusAmount = isBonusExist ? (bonusPercent * maxRate) / 100 : 0;

  return (
    <Item__styled>
      <Head__styled>
        <HeadId__styled>
          <HeadIdCircle__styled />
          <span>id {data.id}</span>
        </HeadId__styled>
        <HeadStatus__styled
          style={{ color: `${TICKET_STATUSES[data.status].color}` }}>
          {t(TICKET_STATUSES[data.status].status)}
          {data.isCashout === 1 && ` (cashout)`}
        </HeadStatus__styled>
      </Head__styled>
      <Body__styled>
        <BodyRow__styled>
          <span>{t('date')}</span>
          <span> {dayjs(data.createdAt).format('DD/MM/YY HH:mm')}</span>
        </BodyRow__styled>
        <BodyRow__styled>
          <span>{t('betType')}</span>
          <span>
            {data.consistOf === 2 && `live`} {BET_TYPES[data.kind]} (
            {data.events.length})
          </span>
        </BodyRow__styled>
        <BodyRow__styled>
          <span>{t('amount')}</span>
          <span>
            {data.amount.toTruncFixed()} {data.currency}
          </span>
        </BodyRow__styled>
        <BodyRow__styled success={!!bonusAmount}>
          <span>{t('Bonus')}</span>
          <span>
            {bonusAmount ? bonusAmount.toTruncFixed() : 0} {data.currency}
          </span>
        </BodyRow__styled>
        <BodyRow__styled>
          <span>{t('possibleWinning')}</span>
          <span>
            {possibleWinning.toTruncFixed()}

            {!!bonusAmount && (
              <span style={{ color: 'var(--color-increment)', marginLeft: 5 }}>
                (+{bonusAmount.toTruncFixed()})
              </span>
            )}
            <span style={{ marginLeft: 5 }}>{data.currency}</span>
          </span>
        </BodyRow__styled>
        <BodyRow__styled
          style={{ color: `${TICKET_STATUSES[data.status].color}` }}>
          <span>{t('gain', { ns: 'betSlip' })}</span>
          <span>
            {wonAmount.toTruncFixed()} {data.currency}
          </span>
        </BodyRow__styled>
        {!!data.cashout > 0 && (
          <Cashout__styled>
            <CashoutButton__styled>
              <Button isLoading={isLoading} onClick={() => handleCashOut()}>
                {t('cashout')} {data.cashout.toTruncFixed()} {data.currency}
              </Button>
            </CashoutButton__styled>
          </Cashout__styled>
        )}
      </Body__styled>
      {gamesOpened && (
        <Games__styled>
          {data.events.map(event => {
            const {
              result,
              leagueName,
              team1,
              team2,
              id,
              startDate,
              odds,
              sportId,
            } = event;
            const { FT, HT = [0, 0] } = result?.score || {};

            const fullTime = FT || HT;

            return (
              <Game__styled key={id}>
                <GameHead__styled>{leagueName}</GameHead__styled>
                <GameBody__styled>
                  <BodyRow__styled>
                    <GameInfo__styled>
                      <GameTeamIcon__styled>
                        <use xlinkHref={`${sportsSprite}#${sportId}`} />
                      </GameTeamIcon__styled>
                      <GameTeams__styled>
                        <GameDate__styled>
                          {dayjs(startDate).format('DD/MM/YY HH:mm')}
                        </GameDate__styled>
                        <GameTeam__styled>
                          <span>{team1}</span>
                          <GameTeamScore__styled>
                            <GameTeamScoreItem__styled>
                              {fullTime[0]}
                            </GameTeamScoreItem__styled>
                            {HT[0] + ' ' + (fullTime[0] - HT[0])}
                          </GameTeamScore__styled>
                        </GameTeam__styled>
                        <GameTeam__styled>
                          <span>{team2}</span>
                          <GameTeamScore__styled>
                            <GameTeamScoreItem__styled>
                              {fullTime[1]}
                            </GameTeamScoreItem__styled>
                            {HT[1] + ' ' + (fullTime[1] - HT[1])}
                          </GameTeamScore__styled>
                        </GameTeam__styled>
                      </GameTeams__styled>
                    </GameInfo__styled>
                  </BodyRow__styled>
                  <BodyRow__styled>
                    <span>{t('results')}</span>
                    <span>
                      {t(`markets:${odds[0].marketName}`)} ({odds[0].priceName}
                      {odds[0].handicapValue ? ` ${odds[0].handicapValue}` : ''}
                      )
                    </span>
                  </BodyRow__styled>
                  <BodyRow__styled>
                    <span>{t('odds', { ns: 'betSlip' })}</span>
                    <span> {odds[0].rate.toTruncFixed()}</span>
                  </BodyRow__styled>
                  <BodyRow__styled>
                    <span>{t('status')}</span>
                    <GameStatusIcon__styled>
                      <svg>
                        <use
                          xlinkHref={`#${
                            TICKET_STATUSES[odds[0].status].status
                          }`}
                        />
                      </svg>
                    </GameStatusIcon__styled>
                  </BodyRow__styled>
                </GameBody__styled>
              </Game__styled>
            );
          })}
        </Games__styled>
      )}
      <Collapse__styled onClick={() => setGamesOpened(prevState => !prevState)}>
        <span>{t('betDetails')}</span>
        <CollapseIcon__styled active={gamesOpened}>
          <svg>
            <use xlinkHref={'#arrow'} />
          </svg>
        </CollapseIcon__styled>
      </Collapse__styled>
    </Item__styled>
  );
};

export default BetHistoryItemMobile;
