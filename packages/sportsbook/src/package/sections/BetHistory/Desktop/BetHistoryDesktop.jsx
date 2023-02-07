import React, { useState } from 'react';
import {
  Empty__styled,
  EmptyIcon__styled,
  History__styled,
  HistoryBody__styled,
  HistoryColumn__styled,
  HistoryColumn_cashout__styled,
  HistoryColumn_gain__styled,
  HistoryColumn_status__styled,
  HistoryInner__styled,
  HistoryRow__styled,
  HistoryRow_head__styled,
  Pagination__styled,
} from './BetHistoryDesktop.styled';
import BetHistoryItem from './BetHistoryItem/BetHistoryItem';
import axios from 'axios';
import ContentLoader from 'react-content-loader';
import { useTranslation } from 'react-i18next';
import Pagination from '../../../components/Pagination/Pagination';
import { useCallback } from 'react';

const LIMIT = 15;

const BetHistoryDesktop = ({ isBonusAvailable }) => {
  const [betHistoryList, setBetHistoryList] = useState([]);
  const [metaCount, setMetaCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation(['translation', 'betSlip']);

  const getBetHistory = useCallback((offset = 0, showMore = true) => {
    setLoading(true);
    axios
      .get('sportsbook/bet-history', {
        params: { limit: LIMIT, offset, status: 2 },
      })
      .then(e => {
        if (showMore) {
          setBetHistoryList(e.data);
        } else {
          setBetHistoryList(e.data);
        }
        setMetaCount(e.count);
      })
      .finally(() => setLoading(false));
  }, []);

  if (!loading && !betHistoryList.length) {
    return (
      <Empty__styled>
        <EmptyIcon__styled>
          <svg>
            <use xlinkHref={'#empty'} />
          </svg>
        </EmptyIcon__styled>
        <div>Your bet history is empty</div>
      </Empty__styled>
    );
  }

  return (
    <History__styled>
      <HistoryInner__styled>
        <HistoryBody__styled>
          <HistoryRow_head__styled>
            <HistoryColumn__styled>{t('date')}</HistoryColumn__styled>
            <HistoryColumn__styled>{t('id')}</HistoryColumn__styled>
            <HistoryColumn__styled>{t('betType')}</HistoryColumn__styled>
            <HistoryColumn__styled>{t('amount')}</HistoryColumn__styled>
            <HistoryColumn__styled>{t('Bonus')}</HistoryColumn__styled>
            <HistoryColumn__styled>
              {t('possibleWinning')}
            </HistoryColumn__styled>
            <HistoryColumn_gain__styled>
              {t('gain', { ns: 'betSlip' })}
            </HistoryColumn_gain__styled>
            <HistoryColumn_cashout__styled>
              {t('cashout', { ns: 'betSlip' })}
            </HistoryColumn_cashout__styled>
            <HistoryColumn_status__styled>
              {t('status')}
            </HistoryColumn_status__styled>
          </HistoryRow_head__styled>
          {loading
            ? Array.from(Array(15), (_, i) => (
                <HistoryRow__styled key={i}>
                  <ContentLoader
                    speed={2}
                    width={'100%'}
                    height={'40'}
                    backgroundColor="var(--sb-dark-three)"
                    foregroundColor="var(--sb-dark-four)">
                    <rect x="10" y="12" rx="3" ry="3" width="60" height="12" />
                    <rect
                      x="calc((100% - 15rem) / 7 + 12px)"
                      y="12"
                      rx="3"
                      ry="3"
                      width="20"
                      height="12"
                    />
                    <rect
                      x="calc(((100% - 15rem) / 7) * 2 + 12px)"
                      y="12"
                      rx="3"
                      ry="3"
                      width="50"
                      height="12"
                    />
                    <rect
                      x="calc(((100% - 15rem) / 7) * 3 + 12px)"
                      y="12"
                      rx="3"
                      ry="3"
                      width="50"
                      height="12"
                    />
                    <rect
                      x="calc(((100% - 15rem) / 7) * 4 + 12px)"
                      y="12"
                      rx="3"
                      ry="3"
                      width="80"
                      height="12"
                    />
                    <rect
                      x="calc(((100% - 15rem) / 7) * 5 + 12px)"
                      y="12"
                      rx="3"
                      ry="3"
                      width="50"
                      height="12"
                    />
                    <rect
                      x="calc(((100% - 15rem) / 7) * 6 + 12px)"
                      y="12"
                      rx="3"
                      ry="3"
                      width="50"
                      height="12"
                    />
                    <rect
                      x="calc(((100% - 15rem) / 7) * 6 + 122px)"
                      y="10"
                      rx="3"
                      ry="3"
                      width="100"
                      height="20"
                    />
                    <rect
                      x="calc(100% - 10rem + 12px)"
                      y="12"
                      rx="3"
                      ry="3"
                      width="50"
                      height="12"
                    />
                    <rect
                      x="calc(100% - 50px)"
                      y="10"
                      rx="3"
                      ry="3"
                      width="16"
                      height="16"
                    />
                    <rect
                      x="calc(100% - 20px)"
                      y="10"
                      rx="3"
                      ry="3"
                      width="16"
                      height="16"
                    />
                  </ContentLoader>
                </HistoryRow__styled>
              ))
            : betHistoryList.map(item => (
                <BetHistoryItem
                  key={item.id}
                  data={item}
                  getBetHistory={getBetHistory}
                  isBonusAvailable={isBonusAvailable}
                />
              ))}
        </HistoryBody__styled>
        <Pagination__styled>
          <Pagination limit={LIMIT} count={metaCount} cb={getBetHistory} />
        </Pagination__styled>
      </HistoryInner__styled>
    </History__styled>
  );
};

export default BetHistoryDesktop;
