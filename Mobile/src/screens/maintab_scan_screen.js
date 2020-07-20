/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/Ionicons';

export default function MainTab_scan_screen({ navigation}) {
    return (
        <View style={styles.container}>
            <Text>Scan Screen</Text>
            <Button
                title="Go to Product"
                onPress={() => navigation.navigate('product')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(255, 218, 194, .4)', //'white',
    },
});
