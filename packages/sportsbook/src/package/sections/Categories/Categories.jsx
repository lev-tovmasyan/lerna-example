import PropTypes from 'prop-types';
import { Category__styled, CategoryList__styled } from './Categories.styled';
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryItemSkeleton from './CategoryItem/CategoryItem.skeleton';
import { useState } from 'react';
import { useRef } from 'react';
import Scroller from '../../components/Scroller/Scroller';
import { useMediaQuery } from '@react-hook/media-query';

const categoriesList = new Array(7).fill(null);

const Categories = ({ isLoading, categories, activeCategory }) => {
  const [isScrollerVisible, setIsScrollerVisible] = useState(false);
  const isTablet = useMediaQuery('only screen and (max-width: 1024px)');
  const ref = useRef(null);

  return (
    <Category__styled
      onMouseEnter={() => setIsScrollerVisible(true)}
      onMouseLeave={() => setIsScrollerVisible(false)}>
      <CategoryList__styled ref={ref}>
        {categoriesList.map((_, i) => {
          return isLoading ? (
            <CategoryItemSkeleton key={i} />
          ) : (
            <CategoryItem
              key={i}
              category={categories[i] || {}}
              active={
                activeCategory === String(categories[i]?.name) ||
                activeCategory === String(categories[i]?.id)
              }
            />
          );
        })}
      </CategoryList__styled>
      {(isTablet || isScrollerVisible) && <Scroller scrollRef={ref} />}
    </Category__styled>
  );
};

Categories.propTypes = {
  isLoading: PropTypes.bool,
  categories: PropTypes.array,
  activeCategory: PropTypes.string,
};

export default Categories;
