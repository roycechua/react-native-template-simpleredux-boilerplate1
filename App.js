import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';
import redux from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { MainNavigator } from './src/navigation';

const {store, persistor} = redux();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="default" />
          <MainNavigator />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
