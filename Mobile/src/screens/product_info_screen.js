/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function  Product_info_screen() {
    const accreditations = [
        {
            id: 1,
            url: 'https://5.imimg.com/data5/JK/BR/RG/SELLER-1781089/iso-22000-2018-certification-service-500x500.jpeg',
            title:'ISO 22000:2018'
        },
        {
            id: 2,
            url: 'https://5.imimg.com/data5/FK/OI/MY-25087216/iso-9001-2015-certification-500x500.jpg',
            title:'ISO 9001:2015'
        },
        {
            id: 3,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5UxOhb40cUDwBSk9f-B8xo1yi8PZwJdj9gQ&usqp=CAU',
            title:'HACCP'
        },
    ];
    
    var items = []

    accreditations.forEach(element => {
        return items.push(
            <View style={styles.imageColumn}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: element.url }}
                        resizeMode='contain'
                        style={styles.image}
                    />
                </View>
                <Text>{element.title}</Text>
            </View>
        ) 
    });  

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.topImageContainer}>
                    <Image
                        source={{ uri: 'https://www.lavazza.it/content/dam/lavazza/products/caffe/intl/com/Lavazza_Grani_thumb.png' }}
                        resizeMode='contain'
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleBig}>Lavazza Dark Coffee</Text>
                </View>

                <View style={styles.infoCirclesContainer}>
                    <View style={styles.col}>
                        <Text style={styles.titleBigWhite}>2</Text>
                        <Text style={{color:'white'}}>Calories</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.titleBigWhite}>0g</Text>
                        <Text style={{color:'white'}}>Sugar</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.titleBigWhite}>0g</Text>
                        <Text style={{color:'white'}}>Fat</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.titleBigWhite}>0g</Text> 
                        <Text style={{color:'white'}}>Carb.</Text>                       
                    </View>
                </View>

                <View style={styles.servingInfoContainer}>
                    <View style={styles.row}>
                        <View style={styles.colLeft}>
                            <Text style={styles.title}>Serving Size</Text>
                        </View>
                        <View style={styles.colRight}>
                            <Text style={styles.title}>20 g</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.colLeft}>
                            <Text style={styles.title}>Serving per Container</Text>
                        </View>
                        <View style={styles.colRight}>
                            <Text style={styles.title}>12.5</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.colLeft}>
                            <Text style={styles.title}>Total Calories</Text>
                        </View>
                        <View style={styles.colRight}>
                            <Text style={styles.title}>2</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.accreditationsContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Accreditations</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.imagesRow}>
                            {items}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    col: {
        alignItems: 'center',
        justifyContent: 'center',
        height: wp(18.5),
        width:wp(18.5),
        borderWidth:1,
        borderRadius:50,
        marginHorizontal:wp(2),
        borderColor:'gray',
        backgroundColor:'#6b2b3d'
    },
    row: {
        paddingHorizontal: wp(5),
        paddingVertical:wp(1),
        flexDirection:'row',
        flex:1,
    },
    colLeft: {
        flex:9,
    },
    colRight: {
        flex:1,
    },
    imagesRow: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    bottomContainer: {
        paddingHorizontal: wp(5),
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: wp(8),
        marginTop:wp(5)
    },
    title: {
        fontSize: 16,
    },
    titleBig: {
        fontSize: 20,
    },
    titleBigWhite: {
        fontSize: 20,
        color:'white'
    },
    image: {
        height: '100%',
        width: '100%',
    },
    imageColumn: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',   
        marginTop:wp(5)     
    },
    imageContainer: {
        marginBottom:wp(2),
        backgroundColor: 'white',
        height: wp(41),
        width: wp(41),
        padding: wp(3),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    accreditationsContainer:{
        height:'auto',
        width:wp(100),
        justifyContent:'center',
        paddingBottom:wp(5)
    },
    servingInfoContainer:{
        height:'auto',
        width:wp(100),
        alignItems:'center',
        justifyContent:'center',
        borderColor:'gray',
        borderBottomWidth:.8,
        paddingVertical:wp(6),
        backgroundColor: 'rgba(255, 218, 194, .5)'
    },
    infoCirclesContainer:{
        height:wp(30),
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'gray',
        borderBottomWidth:.8,
        paddingHorizontal:wp(5)
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
    topImageContainer:{
        height:wp(80),
        width:wp(100),
        alignItems:'center',
        justifyContent:'center',     borderColor:'gray',
        borderBottomWidth:.8,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 218, 194, .4)', //'white',
    },
});
