/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Product_info_screen() {
    return (
        <View style={styles.container}>
            <Text>Product Info Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 218, 194, .4)', //'white',
    },
});
