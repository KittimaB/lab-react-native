import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    }) 

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=e42880219c721614aa5443290447e8e1`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp });
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
            <View style={styles.bg}>
                <Text>{props.place}</Text>
                <Text style={styles.zipCode}>Zip code is {props.zipCode}. </Text>
                <Forecast {...forecastInfo} />
            </View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
    },
    zipCode: {
        color: '#fff',
        fontSize: 12,
        paddingBottom: 10,
        textAlign: 'center'
    },

    bg: {
        backgroundColor:'hsla(0, 0%, 0%, 0.4);',
        padding: 15,
        width: '100%',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    }
   });

   
   