import React, { useState } from 'react';
//our data
import { carData } from '../data/data';
//styles
import { Wrapper, List, MediaContainer } from './Home.styles';
//components
import Title from '../components/Title';
import Media from '../components/Media';

function Home() {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <Wrapper>
      <List>
        {carData.map(({ title }, index) => {
          return (
            <Title
              title={title}
              setActiveIndex={setActiveIndex}
              index={index}
            />
          );
        })}
      </List>
      <MediaContainer>
        {carData.map(({ url }, index) => {
          const isActive = index === activeIndex;
          return <Media url={url} active={isActive} />;
        })}
      </MediaContainer>
    </Wrapper>
  );
}

export default Home;
