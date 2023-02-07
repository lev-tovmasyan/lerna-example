import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './assets/styles/style.scss';
import App from './App';
import { persistor, store } from './redux/store';
import ThemeProvider from './providers/ThemProvider';
import MyI18nextProvider from './providers/I18nextProvider';
import ConfigsProvider from './providers/ConfigsProvider.jsx';
import InitialConfigProvider from './providers/InitialConfigProvider';
import SportsbookProvider from './package/providers';

export const Sportsbook = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <InitialConfigProvider>
          <MyI18nextProvider>
            <ConfigsProvider>
              <ThemeProvider>
                <SportsbookProvider>
                  <App />
                </SportsbookProvider>
              </ThemeProvider>
            </ConfigsProvider>
          </MyI18nextProvider>
        </InitialConfigProvider>
      </PersistGate>
    </Provider>
  );
};
