import React, {useContext} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import colors from './../config/colors.js';

import {DetailTypeContext} from '../context/DetailType.js';
import {RecipeInfoContext} from '../context/RecipeInfo.js';

function OpenedCard() {
  const [detailType, setDetailType] = useContext(DetailTypeContext);
  const [recipeInfo, updateRecipeInfo] = useContext(RecipeInfoContext);

  if (!recipeInfo.tech) {
    return (
      <View style={openedCardStyle.loadingCont}>
        <Text>Loading...</Text>
      </View>
    );
  }

  function detailContent() {
    switch (detailType) {
      case 'Ingredients':
        return (
          <View
            style={[
              openedCardStyle.content,
              openedCardStyle.ingredientsContent,
            ]}>
            <Text style={openedCardStyle.headers}>Ingredients</Text>
            {recipeInfo.ingredients.map((step, index) => {
              return (
                <Text style={openedCardStyle.normalText} key={index}>
                  {step}
                </Text>
              );
            })}
            <Text style={openedCardStyle.headers}>Equipment</Text>
            {recipeInfo.equipment.map((step, index) => {
              return (
                <Text style={openedCardStyle.normalText} key={index}>
                  {step}
                </Text>
              );
            })}
          </View>
        );
      case 'Recipe':
        return (
          <View style={openedCardStyle.content}>
            <Text style={openedCardStyle.title}>Full Recipe</Text>
            <WebView
              style={openedCardStyle.videos}
              source={{uri: recipeInfo.linkToRecipe}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
            <Text style={openedCardStyle.headers}>Suggested Changes</Text>
            {recipeInfo.changes.map((step, index) => {
              return (
                <Text style={openedCardStyle.normalText} key={index}>
                  {step}
                </Text>
              );
            })}
            <Text style={openedCardStyle.headers}>Simplification</Text>
            {recipeInfo.simplification.map((step, index) => {
              return (
                <Text style={openedCardStyle.normalText} key={index}>
                  {step}
                </Text>
              );
            })}
          </View>
        );
      case 'Notes':
        return (
          <View style={openedCardStyle.noteContent}>
            <Text style={openedCardStyle.title}>Quick Notes</Text>

            {recipeInfo.notes.map((step, index) => {
              return (
                <Text style={openedCardStyle.noteText} key={index}>
                  {index + 1}. {step}
                </Text>
              );
            })}
          </View>
        );
      case 'Technique':
        return (
          <View style={openedCardStyle.content}>
            <Text style={openedCardStyle.title}>Technique</Text>
            {recipeInfo.tech.map((step, index) => {
              if (/^http/.test(step)) {
                return (
                  <WebView
                    style={openedCardStyle.videos}
                    key={index}
                    source={{uri: step}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                  />
                );
              } else {
                return (
                  <Text style={openedCardStyle.normalText} key={index}>
                    {step}
                  </Text>
                );
              }
            })}
          </View>
        );
      case 'Concept':
        return (
          <View style={openedCardStyle.content}>
            <Text style={openedCardStyle.title}>Concept</Text>
            {recipeInfo.concept.map((step, index) => {
              if (/^http/.test(step)) {
                return (
                  <WebView
                    style={openedCardStyle.videos}
                    key={index}
                    source={{uri: step}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                  />
                );
              } else {
                return (
                  <Text style={openedCardStyle.normalText} key={index}>
                    {step}
                  </Text>
                );
              }
            })}
          </View>
        );
      default:
        return (
          <View style={openedCardStyle.content}>
            <Text>Error</Text>
          </View>
        );
    }
  }

  return (
    <SafeAreaView style={openedCardStyle.container}>
      <ScrollView
        style={openedCardStyle.outerBox}
        contentContainerStyle={openedCardStyle.innerBox}>
        {detailContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

const openedCardStyle = StyleSheet.create({
  loadingCont: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    height: '100%',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 500,
    marginBottom: 50,
  },
  outerBox: {
    flex: 1,
    width: '100%',
  },
  innerBox: {
    paddingTop: '15%',
  },
  videos: {
    width: 340,
    height: 275,
    marginVertical: 40,
  },
  title: {
    fontSize: 23,
    fontWeight: '600',
    marginBottom: 20,
  },
  headers: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 80,
    marginBottom: 10,
  },
  normalText: {
    fontSize: 15,
    fontWeight: '500',
    width: '80%',
    textAlign: 'center',
  },
  noteContent: {
    paddingHorizontal: 40,
    minHeight: 200,
    justifyContent: 'space-around',
  },
  noteText: {
    fontSize: 17,
    fontWeight: '500',
    paddingVertical: 10,
  },
  ingredientsContent: {
    marginTop: -80,
  },
});

export default OpenedCard;
