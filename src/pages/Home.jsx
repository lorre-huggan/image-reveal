import React, { useState, useEffect } from 'react';

//our data
import { carData } from '../data/data';
//styles
import { Wrapper, List, MediaContainer } from './Home.styles';
//components
import Title from '../components/Title';
import Media from '../components/Media';

//Custom hook to get window x, y position

const useMousePosition = () => {
  // x, y state
  const [mousePosition, setMousePosition] = useState([0, 0]);
  //use effect to set x, y position to client x, y
  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition([event.clientX, event.clientY]);
    };

    window.addEventListener('mousemove', updateMousePosition);
    // use effect clean up function
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

//animations
const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: 'easeInOut',
    },
  },
  hidden: { opacity: 0 },
};

function Home() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [x, y] = useMousePosition();

  return (
    <Wrapper>
      <List initial="hidden" animate="visible" variants={list}>
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
          //update x, y pos only when active
          const xPos = isActive ? x : 0;
          const yPos = isActive ? y : 0;
          return <Media url={url} active={isActive} x={xPos} y={yPos} />;
        })}
      </MediaContainer>
    </Wrapper>
  );
}

export default Home;
