import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Span = styled.span``;

export const TopHeader = styled.h1`
  font-weight: 900;
`;
export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0rem 5rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const Heading = styled.h3`
  z-index: 2;
  font-size: 4rem;
  color: #eee;
  font-weight: 900;
  transition: all 0.35s ease;
  &::after {
    content: ']';
  }
  &::before {
    content: '[';
  }
`;

export const List = styled(motion.div)`
  z-index: 1;
  mix-blend-mode: difference;
  width: 50%;
  &:hover ${Heading} {
    opacity: 0.1;
  }
`;

export const ItemWrapper = styled(motion.div)`
  display: inline-block;
  margin-right: 1.25rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
  transition: all 0.35s ease;

  &:last-of-type {
    margin-right: 0rem;
  }

  &:hover ${Heading} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  opacity: ${({ active }) => (active ? '1' : '0')};
  position: absolute;
  filter: grayscale(1);
  width: auto;
  height: auto;
  max-height: 50%;
  max-width: 60%;
  object-fit: contain;
  pointer-events: none;
`;

export const MediaContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
