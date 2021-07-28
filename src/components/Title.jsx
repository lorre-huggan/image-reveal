import React from 'react';
import { ItemWrapper, Heading, Span } from '../pages/Home.styles';

const item = {
  visible: { opacity: 1, y: -100 },
  hidden: { opacity: 0, y: 0 },
};

function Title({ title, setActiveIndex, index }) {
  return (
    <ItemWrapper
      variants={item}
      transition={{ ease: 'circInOut' }}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(-1)}
    >
      <Heading>
        <Span>{title}</Span>
      </Heading>
    </ItemWrapper>
  );
}

export default Title;
