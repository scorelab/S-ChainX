/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Add_product_screen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.companyName}>Score Group</Text>
                <Text style={styles.slogan}>Sustainable Computing Research</Text>
            </View>
            <View style={styles.logo}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://www.scorelab.org/assets/img/score.jpg' }}
                        resizeMode='center'
                        style={styles.image}
                    />
                </View>
            </View>
            <View style={styles.contact}>
                <View style={styles.contactTitle}>
                    <Text style={styles.contactUsTItle}>Contact us for more information</Text>
                </View>                
                <View style={styles.contactContainer}>
                    <View style={styles.contactContainerLeft}>
                        <Text style={styles.contactUs}>Website</Text>
                        <Text style={styles.contactUs}>Gitter</Text>
                        <Text style={styles.contactUs}>E-mail</Text>
                    </View>
                    <View style={styles.contactContainerRight}>
                        <Text style={styles.contactUs}>: www.scorelab.org</Text>
                        <Text style={styles.contactUs}>: gitter.im/scorelab/scorelab</Text>
                        <Text style={styles.contactUs}>: info@scorelab.org</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Got It</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 218, 194, .4)', //'white',
    },
    header: {
        alignItems: 'center',
        paddingTop:hp(3),
        flex: .9,
    },
    companyName: {
        fontSize: 23,
    },
    slogan: {
        fontSize: 15,
        paddingTop:6
    },
    logo: {
        flex: 2,
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: 'white',
        height: wp(41),
        width: wp(80),
        padding: wp(3),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    contact: {
        flex: 3,
    },
    contactTitle: {
        justifyContent: 'center',
        alignItems:'center',
    },
    contactUsTItle: {
        fontSize: 18,
        marginBottom: hp(3)
    },
    contactUs: {
        fontSize: 16,        
        marginBottom: hp(3)
    },
    image: {
        height: '100%',
        width: '100%',
    },
    contactContainer: {
        flexDirection: 'row',
        paddingHorizontal:wp(10)
    },
    contactContainerLeft: {
        flexDirection: 'column',
        paddingLeft: wp(4),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: .8
    },
    contactContainerRight: {
        flexDirection: 'column',
        flex: 2
    },
    button: {
        marginTop:hp(5),
        backgroundColor: 'white',
        height: hp(7),
        width: wp(30),
        borderRadius: 10,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText: {
        color: 'tomato',
        fontSize:18
    },
});
