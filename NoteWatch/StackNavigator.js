import React from "react";
import {View, Text } from "react-native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Stopwatch from "./Screens/Stopwatch";
import Notes from "./Screens/Notes";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group> 
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Stopwatch" component={Stopwatch} />
                <Stack.Screen name="Notes" component={Notes} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;