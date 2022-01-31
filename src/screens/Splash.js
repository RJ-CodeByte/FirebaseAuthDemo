import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Splash({navigation}) {
  const user = auth().currentUser;

  useEffect(() => {
    setTimeout(() => {
      console.log(user);
      auth().onAuthStateChanged(user => {
        if (user) {
          navigation.replace('Home');
        } else {
          navigation.replace('Auth');
        }
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../../assets/Login2.png')} />
      <Text style={styles.text}>Social Logins</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
});
