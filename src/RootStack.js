import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Screen/Home/Home";


const Stack = createNativeStackNavigator();

function myStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator intialRouteName={"Home"}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default myStack;
