import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}


body {
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  
}

 
`;
