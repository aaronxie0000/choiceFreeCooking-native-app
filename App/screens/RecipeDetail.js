import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import colors from './../config/colors.js';

function RecipeDetail({navigation}) {
  const [choosenRecipe, updateRecipe] = useState('Homemade Pasta');

  return (
    <SafeAreaView style={detailStyle.container}>
      <ScrollView
        style={detailStyle.outerBox}
        contentContainerStyle={detailStyle.innerBox}>
        <View style={[detailStyle.titleCard]}>
          <View style={[detailStyle.titleCont]}>
            <Text style={detailStyle.title}>{choosenRecipe}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={[detailStyle.card, detailStyle.card2]}>
          <Text style={detailStyle.cardText}>Ingredients</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={[detailStyle.card, detailStyle.card1]}>
          <Text style={detailStyle.cardText}>The Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={[detailStyle.card, detailStyle.card2]}>
          <Text style={detailStyle.cardText}>Quick Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={[detailStyle.card, detailStyle.card1]}>
          <Text style={detailStyle.cardText}>Technique Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={[detailStyle.card, detailStyle.card2]}>
          <Text style={detailStyle.cardText}>Concept Notes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const detailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  outerBox: {
    flex: 1,
  },
  innerBox: {
    paddingTop: 160,
    paddingBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCard: {
    width: 160,
    height: 160,
    borderRadius: 80,
    position: 'absolute',
    top: 2,
    left: 2,
    backgroundColor: colors.primary,
  },
  titleCont: {
    position: 'absolute',
    width: 150,
    top: 55,
    left: 10,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 2,
    color: colors.background,
  },
  card: {
    width: '90%',
    height: 300,
    marginVertical: 30,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1: {
    backgroundColor: colors.text,
  },
  card2: {
    backgroundColor: colors.primary,
  },
  cardText: {
    fontWeight: '800',
    fontSize: 30,
    color: colors.background,
  },
});

export default RecipeDetail;
