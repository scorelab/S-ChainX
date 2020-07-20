/* eslint-disable prettier/prettier */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Maintab_scan_screen from '../screens/maintab_scan_screen';
import ProductTab_navigation from './productTab_navigation';

const stack = createStackNavigator();

export default function ScanStack_navigation() {
    return (
        <stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: { color: 'rgba(0,0,0,.7)', fontSize:23 }
            }}
        >
            <stack.Screen name="scan" options={{ title: 'S-Chain' }} component={Maintab_scan_screen} />
            <stack.Screen name="product" options={{ title: 'Product Details' }} component={ProductTab_navigation} />
        </stack.Navigator>
    );
}
