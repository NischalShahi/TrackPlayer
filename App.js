/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppContainer from './src/navigations/AppContainer';

//  console.disableYellowBox = true;

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer />
    </QueryClientProvider>
  );
};

export default App;
