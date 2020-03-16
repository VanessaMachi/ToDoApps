import React from 'react'
import { StyleSheet, View, FlatList, Text, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Sandbox(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>123</Text>
            <Text style={styles.boxTwo}>123</Text>
            <Text style={styles.boxThree}>123</Text>
            <Text style={styles.boxFour}>123</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne:{
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo:{
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree:{
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,
    },
    boxFour:{
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 40,
    }
})
