import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import redux from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = redux();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="default" />
          <SafeAreaView>
            
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
