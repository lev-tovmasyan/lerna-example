import { useEffect, useMemo, useState } from 'react';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';
import { Scroller__styled } from './Scroller.styled';

const Scroller = ({ scrollRef }) => {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  const isScrollExist = useMemo(() => {
    if (!scrollRef.current) {
      return false;
    }
    setIsLeftVisible(scrollRef.current.scrollLeft > 0);
    setIsRightVisible(
      scrollRef.current.scrollWidth - scrollRef.current.scrollLeft >
        scrollRef.current.clientWidth,
    );
    return scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
  }, [scrollRef.current]);

  const onArrowClick = isLeft => {
    const current = scrollRef.current.scrollLeft;
    const nextLeft = isLeft ? current - 500 : current + 500;
    scrollRef.current.scrollLeft = nextLeft;
  };

  useEffect(() => {
    if (isScrollExist) {
      const checkScroll = e => {
        const { scrollLeft, scrollWidth, clientWidth } = e.target;

        setIsLeftVisible(scrollLeft > 0);
        setIsRightVisible(scrollWidth - scrollLeft > clientWidth);
      };

      scrollRef.current?.addEventListener('scroll', checkScroll);

      return () =>
        scrollRef.current?.removeEventListener('scroll', checkScroll);
    }
  }, [isScrollExist, scrollRef.current]);

  if (!isScrollExist) {
    return null;
  }

  return (
    <Scroller__styled>
      {isLeftVisible && (
        <ScrollArrow left onScroll={() => onArrowClick(true)} />
      )}
      {isRightVisible && <ScrollArrow right onScroll={() => onArrowClick()} />}
    </Scroller__styled>
  );
};

export default Scroller;
