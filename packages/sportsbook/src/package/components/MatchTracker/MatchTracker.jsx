import React, { useEffect } from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import { useMatchTracker } from './hooks/matchTracker.hooks';
import { MatchTracker__styled } from './MatchTracker.styled';
const MatchTracker = ({ trackerKey, eventId, sportId, t1Name, t2Name }) => {
  const { matchedEvent } = useMatchTracker(eventId, sportId, t1Name, t2Name);

  useEffect(() => {
    if (!matchedEvent || !trackerKey) {
      return;
    }

    !(function () {
      var d = 'STATSCOREWidgetsEmbederScript';
      if (!window.document.getElementById(d)) {
        (window.STATSCOREWidgets = {}),
          (window.STATSCOREWidgets.onLoadCallbacks = []),
          (window.STATSCOREWidgets.onLoad = function (d) {
            window.STATSCOREWidgets.onLoadCallbacks.push(d);
          });
        var n = window.document.createElement('script');
        (n.src = 'https://wgt-s3-cdn.statscore.com/bundle/Embeder.js'),
          (n.async = !0),
          (n.id = d),
          n.addEventListener('error', function (d) {
            for (
              var n = 0;
              n < window.STATSCOREWidgets.onLoadCallbacks.length;
              n++
            ) {
              window.STATSCOREWidgets.onLoadCallbacks[n](d);
            }
          }),
          window.document.body.appendChild(n);
      }
    })();

    window.STATSCOREWidgets.onLoad(err => {
      if (err) {
        switch (err.type) {
          case 'NetworkError':
            break;

          case 'BrowserNotSupported':
            break;
        }

        return;
      }

      const element = document.getElementById('myWidget');

      const configurationId = trackerKey;

      const inputData = { eventId: matchedEvent.id, language: 'en' };

      const options = {};

      new window.STATSCOREWidgets.WidgetGroup(
        element,
        configurationId,
        inputData,
        options,
      );
    });
  }, [trackerKey, matchedEvent]);

  if (!matchedEvent) {
    return null;
  }

  return (
    <MatchTracker__styled>
      {/* {isLoading ? <Skeleton /> :  */}
      <div id="myWidget" />
      {/* //  */}
    </MatchTracker__styled>
  );
};

MatchTracker.propTypes = {
  trackerKey: PropTypes.string,
  eventId: PropTypes.string,
  sportId: PropTypes.number,
  t1Name: PropTypes.string,
  t2Name: PropTypes.string,
};

export default memo(MatchTracker);
