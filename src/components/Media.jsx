import React, { useState } from 'react';

import { Image } from '../pages/Home.styles';

function Media({ url, active }) {
  return <Image active={active} src={url} alt="car-image" />;
}

export default Media;
