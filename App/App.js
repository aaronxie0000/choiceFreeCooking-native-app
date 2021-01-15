import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RecipeChoice from './screens/RecipeChoice.js';
import Landing from './screens/Landing.js';
import RecipeDetail from './screens/RecipeDetail.js';
import OpenedCard from './screens/OpenedCard.js';
import colors from './config/colors.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          options={{headerStyle: {backgroundColor: colors.background}}}
          component={Landing}
        />
        <Stack.Screen
          name="Choices"
          options={{headerStyle: {backgroundColor: colors.background}}}
          component={RecipeChoice}
        />
         <Stack.Screen
          name="Recipe"
          options={{headerStyle: {backgroundColor: colors.background}}}
          component={RecipeDetail}
        />
        <Stack.Screen
          name="Detail"
          options={{headerStyle: {backgroundColor: colors.background}}}
          component={OpenedCard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
