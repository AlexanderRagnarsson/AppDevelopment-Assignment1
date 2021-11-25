import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BoardList from '../views/BoardListView';
import Board from '../views/BoardView';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BoardList">
        <Stack.Screen name="BoardList" component={BoardList} />
        <Stack.Screen name="Board" component={Board} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
