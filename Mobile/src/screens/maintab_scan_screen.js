/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Button, Linking, TouchableOpacity } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function MainTab_scan_screen({ navigation }) {
    onSuccess = e => {
        console.log(e.data)
        navigation.navigate('product', {scanData:e})
    };

    return (
        <View style={styles.container}>
            <QRCodeScanner
                notAuthorizedView={
                    <Text>Please provide required permissions.</Text>
                }
                showMarker={true}
                onRead={onSuccess}
                markerStyle={{ borderColor: 'tomato', width: wp(80), height: wp(80) }}
                cameraStyle={{ marginTop: -hp(8), }}
                bottomContent={
                    <>
                        <Text>Scan a QR code to recieve details</Text>
                        <Text></Text>
                        <Text>To view a list of supported brands, go to Prodcuts</Text>
                    </>
                }
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
