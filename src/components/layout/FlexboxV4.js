import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

export default props => {
    return (
        <SafeAreaView style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        height: 300,
        backgroundColor: '#33c9a7',
    },
    V1: {
        flexGrow: 1,
        backgroundColor: '#ff801a',
    },
    V2: {
        flexGrow: 1,
        backgroundColor: '#dd22c1',
    }
})