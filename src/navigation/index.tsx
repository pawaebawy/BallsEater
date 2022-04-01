import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PlayScreen from '../screens/PlayScreen/PlayScreen';
import LevelsScreen from '../screens/LevelsScreen/LevelsScreen';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'Levels'}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Play" component={PlayScreen} />
                <Stack.Screen name="Levels" component={LevelsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
