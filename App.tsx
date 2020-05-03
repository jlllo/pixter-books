import React from 'react';
import { Provider } from 'react-redux';
import AppRoot from './app/screens/AppRoot';
import store from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
}
