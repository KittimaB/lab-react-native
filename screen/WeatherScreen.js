import React from "react";
import { View } from "react-native";
import Weather from "../components/Weather";
import { StatusBar } from "expo-status-bar";

export default function WeatherScreen({route}) {
    return (
        <View>
            <Weather zipCode={route.params.zipCode} place={route.params.place} />
            <StatusBar style="auto" />
        </View>
    );
   }

