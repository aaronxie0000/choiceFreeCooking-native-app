import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import colors from './../config/colors.js'

function OpenedCard(){

    return(
        <SafeAreaView style={detailStyle.view}>
            <Text>Hii</Text>

        </SafeAreaView>
    )
}

const detailStyle = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        height: '100%'
    }
})

export default OpenedCard;
