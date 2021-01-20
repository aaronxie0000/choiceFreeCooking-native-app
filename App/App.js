import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RecipeChoice from './screens/RecipeChoice.js';
import Landing from './screens/Landing.js';
import RecipeDetail from './screens/RecipeDetail.js';
import OpenedCard from './screens/OpenedCard.js';
import colors from './config/colors.js';

import {DayIdProvider} from './context/DayId.js';
import {RecipeIdProvider} from './context/RecipeId.js';
import {DetailTypeProvider} from './context/DetailType.js';
import {InfoProvider} from './context/RecipeInfo.js';

import {MenuProvider} from 'react-native-popup-menu';

const Stack = createStackNavigator();

function App() {
  return (
    <DetailTypeProvider>
      <DayIdProvider>
        <RecipeIdProvider>
          <InfoProvider>
            <MenuProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Landing">
                  <Stack.Screen
                    name="Landing"
                    options={{
                      headerStyle: {backgroundColor: colors.background},
                    }}
                    component={Landing}
                  />
                  <Stack.Screen
                    name="Choices"
                    options={{
                      headerStyle: {backgroundColor: colors.background},
                    }}
                    component={RecipeChoice}
                  />
                  <Stack.Screen
                    name="Recipe"
                    options={{
                      headerStyle: {backgroundColor: colors.background},
                    }}
                    component={RecipeDetail}
                  />
                  <Stack.Screen
                    name="Detail"
                    options={{
                      headerStyle: {backgroundColor: colors.background},
                      title: "",
                    }}
                    component={OpenedCard}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </MenuProvider>
          </InfoProvider>
        </RecipeIdProvider>
      </DayIdProvider>
    </DetailTypeProvider>
  );
}

export default App;
