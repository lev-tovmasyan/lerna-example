import { useTheme } from '@emotion/react';
import React, { memo } from 'react';
import { EventRowFavourite__styled } from '../../../../components/EventRow/EventRow.styled';
import Button from '../../../../components/UI/Button/Button';

const EventRowFavourite = ({ isFavourite, onStar }) => {
  const mode = useTheme();
  const starsBetTheme = mode === 'starsBet';
  return (
    <EventRowFavourite__styled>
      <Button
        onClick={e => {
          e.stopPropagation();
          onStar(prevState => !prevState);
        }}
        icon={isFavourite ? 'star' : 'starEmpty'}
        fill={
          starsBetTheme
            ? isFavourite
              ? '#e8b116'
              : '#000000'
            : 'var(--color-active)'
        }
      />
    </EventRowFavourite__styled>
  );
};

export default memo(EventRowFavourite);
