import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import './config/reactotronConfig';

import { store, persistor } from './store';

import Routes from './routes/';
import history from './services/history';
import Header from './components/Header';
import GlobalStyle from './assets/Styles/global.js';

import { ThemeProvider } from 'styled-components';
import { dark, light } from './assets/Styles/themes';

function App() {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem('theme-videoupload');

    if (storageValue) {
      return JSON.parse(storageValue);
    }

    return light;
  });

  useEffect(() => {
    localStorage.setItem('theme-videoupload', JSON.stringify(theme));
  }, [theme]);

  function changeTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Header changeTheme={changeTheme} />
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
