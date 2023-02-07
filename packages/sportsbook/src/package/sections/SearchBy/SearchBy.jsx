import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsBookGetLoading } from '../../../redux/reducers/betslip/betslip.slice';
import { getBetslipBookThunk } from '../../../redux/reducers/betslip/betslip.thunk';
import Search from '../../components/Search/Search';
import {
  SearchBy__styled,
  SearchByBody__styled,
  SearchByFooter__styled,
  SearchByHead__styled,
  SearchByInner__styled,
  SearchBySearch__styled,
  // SearchBySelect__styled,
} from './SearchBy.styled';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';
import { selectIsAuth } from '../../../redux/reducers/auth/auth.slice';

// const options = ['Book Code'];

const SearchBy = ({ title = 'Search By' }) => {
  const dispatch = useDispatch();
  const isBookLoading = useSelector(selectIsBookGetLoading);
  const isAuth = useSelector(selectIsAuth);
  const isTablet = useMediaQuery('only screen and (max-width: 1024px)');

  const onSearch = value => {
    if (!value) {
      return;
    }
    dispatch(getBetslipBookThunk(value));
  };

  return (
    <SearchBy__styled>
      <SearchByHead__styled>{title}</SearchByHead__styled>
      <SearchByBody__styled>
        <SearchByInner__styled>
          {/* <SearchBySelect__styled>
            <Select
              defaultOption={'Bet Id'}
              color={'var(--color-active-contrast)'}
              forOdds
              options={options}
              value={'Book Code'}
            />
          </SearchBySelect__styled> */}
          <SearchBySearch__styled>
            <Search
              placeholder={'Enter Booking Code'}
              onSearch={onSearch}
              isLoading={isBookLoading}
            />
          </SearchBySearch__styled>
        </SearchByInner__styled>
      </SearchByBody__styled>
      {isAuth && !isTablet && (
        <SearchByFooter__styled>
          <Link to={'/bet-history'}>bet History</Link>
        </SearchByFooter__styled>
      )}
    </SearchBy__styled>
  );
};

SearchBy.propTypes = {
  title: PropTypes.string,
};

export default SearchBy;
