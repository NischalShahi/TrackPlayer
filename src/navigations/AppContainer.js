import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Tracks from '../screens/Tracks';
import {THEME} from '../constants';

const AppContainer = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Dashboard',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: THEME.primary,
              },
            }}
          />
          <Stack.Screen
            name="Tracks"
            component={Tracks}
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: THEME.primary,
              },
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppContainer;
