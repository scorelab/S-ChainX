/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Product_track_screen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topImageContainer}>
                <Image
                    source={{ uri: 'https://www.ihannasadventures.de/wp-content/uploads/2019/03/Tag3-1024x536.jpg' }}
                    resizeMode='cover'
                    style={styles.image}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleBig}>Lavazza Dark Coffee</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.group}>
                    <Text style={styles.title}>Planted</Text>
                    <Text style={styles.Subtitle}>Date : 2019/5/16</Text>
                    <Text style={styles.Subtitle}>Location : Svolokia</Text>
                </View>

                <View style={styles.group}>
                    <Text style={styles.title}>Harvested</Text>
                    <Text style={styles.Subtitle}>Date : 2019/8/4</Text>
                    <Text style={styles.Subtitle}>Location : Henningsvaer</Text>
                </View>

                <View style={styles.group}>
                    <Text style={styles.title}>Process</Text>
                    <Text style={styles.Subtitle}>Date : 2019/8/20</Text>
                    <Text style={styles.Subtitle}>Location : Rovikstranda</Text>
                </View>

                <View style={styles.group}>
                    <Text style={styles.title}>Shiped</Text>
                    <Text style={styles.Subtitle}>Date : 2019/9/10</Text>
                    <Text style={styles.Subtitle}>Location : Haukland Hardbour</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    group:{
        paddingVertical:wp(4),
        borderBottomWidth:0.8,
        borderColor:'gray'
    },
    Subtitle:{
        fontSize: 15,
        paddingLeft:wp(5)
    },
    title:{
        fontSize: 17,
        fontWeight:'bold',
        marginBottom:wp(1)
    },
    titleBig: {
        fontSize: 20,
    },
    bottomContainer: {
        paddingBottom:wp(5),
        paddingHorizontal:wp(5),
        height:'auto',
        width:wp(100),
        justifyContent:'center',
        borderColor:'gray',
        borderBottomWidth:.8,
    },
    titleContainer:{
        height:wp(20),
        width:wp(100),
        alignItems:'center',
        justifyContent:'center',
        borderColor:'gray',
        borderBottomWidth:.8,
        backgroundColor: 'rgba(255, 218, 194, .5)'
    },
    image: {
        height: '100%',
        width: '100%',
    },
    topImageContainer:{
        height:wp(60),
        width:wp(100),
        // alignItems:'center',
        // justifyContent:'center',     
        borderColor:'gray',
        borderBottomWidth:.8,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 218, 194, .4)', //'white',
    },
});
