import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import RouteContainer from './src/navigation/index'

import { Provider } from 'react-redux';
import configureStore from './src/stores';


const store = configureStore()
const App = () => {

  return (
    <Provider store={store}>
      <RouteContainer />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
