import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import { LogBox } from 'react-native';
import store from './src/redux/store';
import { Provider} from 'react-redux';

const App = () => {
LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>

  );
};

export default App;