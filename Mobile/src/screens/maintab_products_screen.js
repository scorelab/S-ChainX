/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const products = [
    {
        id: 1,
        url: 'https://www.unileverusa.com/Images/dove_tcm1269-408752_w720.png'
    },
    {
        id: 2,
        url: 'https://hype.my/wp-content/uploads/2015/03/MILO-Malaysia.gif'
    },
    {
        id: 3,
        url: 'https://www.anaphylaxis.org.uk/wp-content/uploads/2019/09/McDonalds-Logo-2.png'
    },
];

var items = []

export default function Products_screen({ navigation }) {
    items = [];

    products.forEach(element => {
       return items.push(
            <View style={styles.imageColumn}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: element.url }}
                        resizeMode='contain'
                        style={styles.image}
                    />
                </View>
            </View>
        ) 
    });   

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Supported Products</Text>
            </View>
        
            <ScrollView>                
                <View style={styles.bottomContainer}>
                    <View style={styles.imagesRow}>
                        {items}
                        
                        <View style={styles.imageColumn}>
                            <TouchableOpacity
                                style={styles.imageContainer}
                                onPress={() => navigation.navigate('add product')}
                            >
                                <MaterialCommunityIcons name='plus-circle-outline' size={80} color='rgba(255, 174, 107, 0.7)' />
                                <Text style={styles.addProduct}>List a Product</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        justifyContent: 'center',
        height: hp(8)
    },
    title: {
        fontSize: 16,
    },
    item: {
        backgroundColor:'white',
        height: wp(42),
        width: wp(42),
        padding: wp(4),
        alignItems: 'center',
        justifyContent: 'center',
        elevation:2,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    addProduct: {
        fontSize: 15,
        marginTop:8
    },
    bottomContainer: {
        paddingHorizontal: wp(5),
    },
    imagesRow: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    imageColumn: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    imageContainer: {
        marginBottom:wp(5),
        backgroundColor: 'white',
        height: wp(41),
        width: wp(41),
        padding: wp(3),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
});
