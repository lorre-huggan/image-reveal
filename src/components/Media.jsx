import React from 'react';

import { Image } from '../pages/Home.styles';

function Media({ url, active, x, y }) {
  return (
    <Image
      style={{
        transform: `translate(${x}px, ${y / 2}px)`,
      }}
      active={active}
      src={url}
      alt="car-image"
    />
  );
}

export default Media;
