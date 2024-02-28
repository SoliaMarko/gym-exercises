import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import BodyPart from './BodyPart';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// TODO
// Arrows Buttons => to scroll horizantally

const LeftArrow = () => {
  const visibility = React.useContext(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible('first', true);
  return (
    <ArrowBackIcon
      disabled={isFirstItemVisible}
      // onClick={visibility.scrollPrev}
      className="left-arrow"
    >
      Left
    </ArrowBackIcon>
  );
};

const RightArrow = () => {
  const visibility = React.useContext(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible('last', false);
  return (
    <ArrowForwardIcon
      disabled={isLastItemVisible}
      // onClick={visibility.scrollNext}
      className="right-arrow"
    >
      Right
    </ArrowForwardIcon>
  );
};
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map(item => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
