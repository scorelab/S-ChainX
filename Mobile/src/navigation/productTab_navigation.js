/* eslint-disable prettier/prettier */

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Product_info_screen from '../screens/product_info_screen';
import Product_track_screen from '../screens/product_track_screen';
import Product_website_screen from '../screens/product_website_screen';

const Tab = createMaterialTopTabNavigator();

export default function ProductTab_navigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: { fontSize: 13 },
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                indicatorStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Tab.Screen name="General" component={Product_info_screen} />
            <Tab.Screen name="Track" component={Product_track_screen} />
            <Tab.Screen name="Website" component={Product_website_screen} />
        </Tab.Navigator>
    );
}
