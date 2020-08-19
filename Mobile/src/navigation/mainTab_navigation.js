/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Maintab_products_screen from '../screens/maintab_products_screen';
import Maintab_history_screen from '../screens/maintab_history_screen';

import ScanStack_navigation from './scanStack_navigation';
import ProductStack_navigation from './productStack_navigation';

const Tab = createBottomTabNavigator();

export default function MainTab_navigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Scan') {
                        iconName = 'scan1';
                        return <AntDesign name={iconName} size={size} color={color} />;
                    } else if (route.name === 'Products') {
                        iconName = 'CodeSandbox';
                        return <AntDesign name={iconName} size={size} color={color} />;
                    } else if (route.name === 'History') {
                        iconName = 'history';
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    }
                },
            })}
            tabBarOptions={{
                labelStyle: { fontSize: 13 },
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Scan" component={ScanStack_navigation} /> 
            <Tab.Screen name="Products" component={ProductStack_navigation} />
            <Tab.Screen name="History" component={Maintab_history_screen} />
        </Tab.Navigator>
    );
}
