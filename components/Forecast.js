import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.main}>{props.main}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.temp}>{props.temp}°C</Text>
        </View>
    );
}

   const styles = StyleSheet.create({
    main: {
        color: '#fff',
        fontSize: 30,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: '300',
    },
    description: {
        color: '#fff',
        fontSize: 15,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: '300',
    },
    temp: {
        color: '#fff',
        fontSize: 50,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: '300',
    },
});