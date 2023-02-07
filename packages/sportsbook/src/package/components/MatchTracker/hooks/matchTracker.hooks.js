import { useEffect, useState, useRef } from 'react';
import stringSimilarity from 'string-similarity';
import axios from 'axios';

export const useMatchTracker = (eventId, sportId, t1Name, t2Name) => {
  const [sports, setSports] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('cache/client/livematchpro')
      .then(({ sports }) => {
        setSports(sports);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const memoizedEventId = useRef(null);

  const [matchedEvent, setMatchedEvent] = useState(null);

  useEffect(() => {
    if (!eventId || memoizedEventId.current?.id === eventId || !sports) {
      return;
    }

    const events = sports[sportId];
    const matches = [];

    events?.forEach(item => {
      const similarity = stringSimilarity.compareTwoStrings(
        item.name,
        `${t1Name} - ${t2Name}`,
      );

      if (similarity > 0.6) {
        matches.push({ ...item, similarity });
      }
    });

    if (!matches.length) {
      setMatchedEvent(null);
      return;
    }

    let maxItem = matches.reduce((max, min) =>
      max.similarity > min.similarity ? max : min,
    );

    if (maxItem) {
      setMatchedEvent(maxItem);
    } else {
      setMatchedEvent(null);
    }

    memoizedEventId.current = eventId;
  }, [eventId, sportId, t1Name, t2Name, sports]);

  return { sports, isLoading, matchedEvent };
};
