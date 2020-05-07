import React from 'react';
import { Provider } from 'react-redux';
import AppRoot from './app/navigation/AppNavigation';
import store from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
}
