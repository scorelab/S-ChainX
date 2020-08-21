/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function History_screen() {
    return (
        <View style={styles.container}>
            <Text>This Screen will show your search history</Text>
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
