import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from '../../routes';
import RootReducer from '../RootReducer';
import data from '../../resources/data.json';

function ReduxProvider() {
  const store = createStore(RootReducer, data);
  console.log("nice");
  console.log(store.getState());
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default ReduxProvider;
