import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
const {SlideInMenu} = renderers;
import colors from '../config/colors';

import {db} from './../config/firebase.js';
import {DayIdContext} from '../context/DayId.js';
import {RecipeIdContext} from '../context/RecipeId.js';
import {ScrollView} from 'react-native-gesture-handler';

function RecipeChoice({navigation}) {
  const [dayInfo, updateDayInfo] = useState({});
  const [dayID, updateDayID] = useContext(DayIdContext);
  const [recipeID, updateRecipeID] = useContext(RecipeIdContext);

  useEffect(() => {
    db.collection('recipeSelect')
      .where('day', '==', dayID)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const rawData = doc.data();

          updateDayInfo({
            dayTech: rawData.dayTech,
            recipeOneTitle: rawData.recipeOneTitle,
            recipeOneID: rawData.recipeOneID,
            recipeTwoTitle: rawData.recipeTwoTitle,
            recipeTwoID: rawData.recipeTwoID,
          });
        });
      });
  }, [dayID]);

  function handleChooseRecipe(id) {
    updateRecipeID(id);
    navigation.navigate('Recipe');
  }

  //useEffect fetches data when land on page, but there may be delay; to prevent null error to loading screen
  if (!dayInfo.dayTech) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={choiceStyle.view}>
      <Menu renderer={SlideInMenu} style={choiceStyle.daySelect}>
        <MenuTrigger style={choiceStyle.daySelectSelector}>
          <Text style={choiceStyle.daySelectSelectorText}>{dayID}</Text>
        </MenuTrigger>
        <MenuOptions style={choiceStyle.daySelectOptions}>
          <ScrollView>
            <MenuOption
              style={choiceStyle.daySelectOption}
              onSelect={() => updateDayID('Day One')}>
              <Text style={choiceStyle.daySelectText}>Day One</Text>
            </MenuOption>
            <MenuOption
              style={choiceStyle.daySelectOption}
              onSelect={() => updateDayID('Day Two')}>
              <Text style={choiceStyle.daySelectText}>Day Two</Text>
            </MenuOption>
            <MenuOption
              style={choiceStyle.daySelectOption}
              onSelect={() => alert('Work In Progress')}>
              <Text style={choiceStyle.daySelectText}>Day Three</Text>
            </MenuOption>
            <MenuOption
              style={choiceStyle.daySelectOption}
              onSelect={() => alert('Work In Progress')}>
              <Text style={choiceStyle.daySelectText}>Day Four</Text>
            </MenuOption>
            <MenuOption
              style={choiceStyle.daySelectOption}
              onSelect={() => alert('Work In Progress')}>
              <Text style={choiceStyle.daySelectText}>Day Five</Text>
            </MenuOption>
          </ScrollView>
        </MenuOptions>
      </Menu>

      <Text style={choiceStyle.header}>Today's Focus</Text>

      <View>
        <View style={choiceStyle.desc}>
          <View style={[choiceStyle.number]}>
            <Text style={choiceStyle.numberFont}>1</Text>
          </View>
          <Text style={choiceStyle.descText}>{dayInfo.dayTech[0]}</Text>
        </View>

        <View style={choiceStyle.desc}>
          <View style={[choiceStyle.number]}>
            <Text style={choiceStyle.numberFont}>2</Text>
          </View>
          <Text style={choiceStyle.descText}>{dayInfo.dayTech[1]}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => handleChooseRecipe(dayInfo.recipeOneID)}
        style={[choiceStyle.cardBg, choiceStyle.cardColor1]}>
        <Text style={choiceStyle.cardTextStyle}>{dayInfo.recipeOneTitle}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleChooseRecipe(dayInfo.recipeTwoID)}
        style={[choiceStyle.cardBg, choiceStyle.cardColor2]}>
        <Text style={choiceStyle.cardTextStyle}>{dayInfo.recipeTwoTitle}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const choiceStyle = StyleSheet.create({
  view: {
    height: '100%',
    backgroundColor: colors.background,
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    fontSize: 37,
    fontWeight: 'bold',
    marginTop: 20,
  },
  daySelect: {
    position: 'absolute',
    left: -5,
    top: -5,
  },
  daySelectSelector: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    backgroundColor: colors.primary,
    borderRadius: 40,
  },
  daySelectSelectorText: {
    fontWeight: 'bold',
    color: colors.background,
  },
  daySelectOptions: {
    height: 150,
    marginBottom: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  daySelectOption: {
    marginVertical: 10,
    borderLeftWidth: 3,
    borderColor: colors.text,
  },
  daySelectText: {
    color: colors.text,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  cardBg: {
    height: '25%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  desc: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  number: {
    paddingVertical: 7.5,
    paddingHorizontal: 14,
    marginRight: 10,
    fontSize: 20,
    textAlignVertical: 'center',
    borderRadius: Platform.OS === 'ios' ? 8 : 5,
    backgroundColor: colors.primary,
  },
  descText: {
    margin: 5,
    marginRight: 20,
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardColor1: {
    backgroundColor: colors.text,
  },
  cardColor2: {
    backgroundColor: colors.primary,
  },
  numberFont: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardTextStyle: {
    color: colors.background,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default RecipeChoice;
