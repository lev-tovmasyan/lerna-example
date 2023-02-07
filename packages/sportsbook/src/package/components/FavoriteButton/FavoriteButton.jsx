import React from 'react';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import Button from '../UI/Button/Button';
import { FavoriteButton__styled } from './FavoriteButton.styled';

const FavoriteButton = ({ onClick }) => {
  const [favorite, setFavorite] = useState(false);
  const { mode } = useTheme();
  const starsBetTheme = mode === 'starsBet';
  return (
    <FavoriteButton__styled onClick={onClick}>
      <Button
        onClick={() => setFavorite(prevState => !prevState)}
        icon={favorite ? 'star' : 'starEmpty'}
        fill={
          starsBetTheme
            ? favorite
              ? '#e8b116'
              : '#000000'
            : 'var(--color-active)'
        }
      />
    </FavoriteButton__styled>
  );
};

export default FavoriteButton;
