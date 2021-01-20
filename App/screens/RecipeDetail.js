import React, {useContext, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import colors from './../config/colors.js';

import {db} from './../config/firebase.js';

import {DetailTypeContext} from '../context/DetailType.js';
import {RecipeIdContext} from '../context/RecipeId.js';
import {RecipeInfoContext} from '../context/RecipeInfo.js';
import {ceil} from 'react-native-reanimated';

function RecipeDetail({navigation}) {
  const [detailType, setDetailType] = useContext(DetailTypeContext);
  const [recipeID, updateRecipeID] = useContext(RecipeIdContext);
  const [recipeInfo, updateRecipeInfo] = useContext(RecipeInfoContext);

  //on load, get all the recipe detail; when open a specific card get that specific part of info
  useEffect(() => {

    db.collection('recipeDetail')
      .where('recipeID', '==', recipeID || 0)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const rawData = doc.data();

          updateRecipeInfo({
            changes: rawData.changes,
            concept: rawData.concept,
            equipment: rawData.equipment,
            ingredients: rawData.ingredients,
            linkToRecipe: rawData.linkToRecipe,
            notes: rawData.notes,
            simplification: rawData.simplification,
            tech: rawData.tech,
            recipeTitle: rawData.recipeTitle,
          });
        });
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //when open card, get detail
  function cardOpenHandle(type) {
    setDetailType(type);
    navigation.navigate('Detail');
  }

  return (
    <SafeAreaView style={detailStyle.container}>
      <Text style={detailStyle.title}>
        {recipeInfo.recipeTitle ? recipeInfo.recipeTitle : 'Loading'}
      </Text>

      <View style={detailStyle.rowCont}>
        <TouchableOpacity
          onPress={() => cardOpenHandle('Ingredients')}
          style={detailStyle.card}>
          <Text style={detailStyle.cardText}>Ingredients</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => cardOpenHandle('Recipe')}
          style={detailStyle.card}>
          <Text style={detailStyle.cardText}>Recipe</Text>
        </TouchableOpacity>
      </View>

      <View style={detailStyle.rowCont}>
        <TouchableOpacity
          onPress={() => cardOpenHandle('Notes')}
          style={detailStyle.card}>
          <Text style={detailStyle.cardText}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => cardOpenHandle('Technique')}
          style={detailStyle.card}>
          <Text style={detailStyle.cardText}>Technique</Text>
        </TouchableOpacity>
      </View>

      <View style={detailStyle.lastRow}>
        <TouchableOpacity
          onPress={() => cardOpenHandle('Concept')}
          style={detailStyle.card}>
          <Text style={detailStyle.cardText}>Concept</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const detailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 40,
    width: '80%',
    textAlign: 'center',
  },
  rowCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastRow: {
    width: 390,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    width: 175,
    height: 175,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: colors.primary,
  },
  cardText: {
    fontWeight: '700',
    color: colors.background,
    fontSize: 17,
  },
});

export default RecipeDetail;
