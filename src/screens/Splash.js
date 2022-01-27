import React,{useEffect} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Splash({navigation}) {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
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
