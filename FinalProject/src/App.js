/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RootNavigation from './routes/RootNavigation';
import {Provider} from 'react-redux';
import store from './redux/store';
import UserHandler from './context/User';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <UserHandler>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </UserHandler>
    </>
  );
};

export default App;
