/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Splash_screen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerTop}>
        <Text style={styles.title}>S-Chain</Text>
      </View>
      <View style={styles.innerMiddle}>
        <Image
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.image} />
      </View>
      <View style={styles.innerBottom}>
        <Text style={styles.footer}>Developed by Score Group</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 218, 194, .4)', //'white',
  },
  innerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
  },
  footer: {
    fontSize: 18,
  },
  innerMiddle: {
    flex: 3,
    alignItems: 'center',
  },
  innerBottom: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('45%'),
    height: wp('45%'),
  },
});
