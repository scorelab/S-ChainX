/* eslint-disable prettier/prettier */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Maintab_products_screen from '../screens/maintab_products_screen';
import Add_product_screen from '../screens/add_product_screen';

const stack = createStackNavigator();

export default function ProductStack_navigation() {
    return (
        <stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: { color: 'rgba(0,0,0,.7)', fontSize: 23 }
            }}
        >
            <stack.Screen name="all products" options={{ title: 'S-Chain' }} component={Maintab_products_screen} />
            <stack.Screen name="add product" options={{ title: 'Add Product' }} component={Add_product_screen} />
        </stack.Navigator>
    );
}
