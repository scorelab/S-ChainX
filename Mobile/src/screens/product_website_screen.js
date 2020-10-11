/* eslint-disable prettier/prettier */

import React from 'react'; 
import { StyleSheet, View, Text, Image, WebView } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Product_website_screen() {
    return (
        <View style={styles.container}>
            <WebView source={{ uri: 'https://www.lavazza.com/en.html' }} />
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
