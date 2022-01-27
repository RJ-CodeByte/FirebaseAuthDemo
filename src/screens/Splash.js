import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Splash({navigation}) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function onSubscribe() {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }

  useEffect(() => {
    setTimeout(() => {
      onSubscribe();
      {
        !user ? navigation.navigate('Auth') : navigation.navigate('Home');
      }
      // navigation.push();
    }, 2000);
  }, []);

  if (initializing) return null;

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
