/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Products_screen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Products Screen</Text>
            <Button
                title="Add Product"
                onPress={() => navigation.navigate('add product')}
            />
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
