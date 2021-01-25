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
import Theme from './context/Theme';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <Theme>
          <UserHandler>
            <RootNavigation />
          </UserHandler>
        </Theme>
      </Provider>
    </>
  );
};

export default App;
