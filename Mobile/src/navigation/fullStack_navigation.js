/* eslint-disable prettier/prettier */

import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTab_navigation from '../navigation/mainTab_navigation';
import Splash_screen from '../screens/splash_screen';

const fullStack = createStackNavigator();

export default function ProductStack_navigation() {
    const [isLoading, setIsLoading] = useState(false);

    /* Start - Use this section to preprocess data */
       /* Set is loading to true in line state definition */
    /* End - Use this section to preprocess data */

    return (
        <NavigationContainer>
            <fullStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {
                    isLoading ? (
                        <fullStack.Screen name="splash" component={Splash_screen} />
                    ) : (
                        <fullStack.Screen name="main" component={MainTab_navigation} />
                    )
                }
            </fullStack.Navigator>
        </NavigationContainer>
    );
}
