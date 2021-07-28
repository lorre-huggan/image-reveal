import React from 'react';
import { ItemWrapper, Heading, Span } from '../pages/Home.styles';

function Title({ title, setActiveIndex, index }) {
  return (
    <ItemWrapper
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
