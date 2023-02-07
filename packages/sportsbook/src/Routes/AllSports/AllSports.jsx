import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuContainer from '../../components/MenuWrapper/MenuContainer';
import Navigation from '../../package/components/Navigation/Navigation';
import { Sport__styled } from '../Sport/Sport.styled';
import { SportMenu__styled } from './AllSports.styled';

const AllSports = () => {
  const navigate = useNavigate();

  const navLinks = useMemo(
    () => [
      {
        name: 'Home',
        cb() {
          navigate('/');
        },
      },
      { name: 'All Sports' },
    ],
    [navigate],
  );

  return (
    <Sport__styled>
      <Navigation links={navLinks} />
      <SportMenu__styled>
        <MenuContainer title="All Sports" />
      </SportMenu__styled>
    </Sport__styled>
  );
};

export default AllSports;
