/* eslint-disable prettier/prettier */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import maintab_history_screen from '../screens/maintab_history_screen';

const stack = createStackNavigator();

export default function ScanStack_navigation() {
    return (
        <stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: { color: 'rgba(0,0,0,.7)', fontSize:23 }
            }}
        >
            <stack.Screen name="scan" options={{ title: 'S-Chain' }} component={maintab_history_screen} />
        </stack.Navigator>
    );
}
