import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Platform, SafeAreaView } from 'react-native';
import colors from '../config/colors';


function RecipeChoice({ navigation }) {
  return (
    <SafeAreaView style={choiceStyle.view}>
      <TouchableOpacity style={choiceStyle.dayCont}>
        <Text style={{ color: colors.background, fontWeight: 'bold', fontSize: 15 }}>Day</Text>
      </TouchableOpacity>
      <Text style={choiceStyle.header}>Today's Focus</Text>

      <View>
        <View style={choiceStyle.desc}>
          <View style={[choiceStyle.number]}>
            <Text style={{ color: colors.background, fontWeight: 'bold', fontSize: 20 }}>1</Text>
          </View>
          <Text style={choiceStyle.descText}>Cutting Technique: Dicing</Text>
        </View>

        <View style={choiceStyle.desc}>
          <View style={[choiceStyle.number]}>
            <Text style={{ color: colors.background, fontWeight: 'bold', fontSize: 20 }}>2</Text>
          </View>
          <Text style={choiceStyle.descText}>
            Building Flavor with the combo: Onion, Carrot, Celery
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Recipe')}
        style={[choiceStyle.cardBg, { backgroundColor: colors.text }]}>
        <Text style={{ color: colors.background, fontSize: 30, fontWeight: 'bold' }}>Here</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Recipe')}
        style={[choiceStyle.cardBg, { backgroundColor: colors.primary }]}>
        <Text style={{ color: colors.background, fontSize: 30, fontWeight: 'bold' }}>YEEE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const choiceStyle = StyleSheet.create({
  header: {
    fontSize: 37,
    fontWeight: 'bold',
    top: -30,
  },
  dayCont: {
    top: -10,
    left: -15,
    position: 'absolute',
    backgroundColor: colors.primary,
    color: colors.background,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    height: '100%',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBg: {
    height: '25%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    top: 20,
    borderRadius: 15,
  },
  desc: {
    flexDirection: 'row',
    marginHorizontal: 40,
    marginBottom: 20,
    alignItems: 'center',
    top: 10,
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
});

export default RecipeChoice;
