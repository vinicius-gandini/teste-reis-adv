import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import AppProvider from './context';

import Routes from './routes';
import Pizzas from './pages/Pizzas';

const App: React.FC = () => (
  <>
    <Router>
      <AppProvider>
        <Pizzas />
      </AppProvider>

      <GlobalStyle />
    </Router>
  </>
);

export default App;