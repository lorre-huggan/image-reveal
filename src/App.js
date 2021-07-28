import { PageWrapper } from './App.styles';
import Home from './pages/Home';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Home />
    </PageWrapper>
  );
}

export default App;
