/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Button, Linking, TouchableOpacity } from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/Ionicons';

export default function MainTab_scan_screen({ navigation }) {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
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
                        <Text>Sca a QR code to recieve details</Text>
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
