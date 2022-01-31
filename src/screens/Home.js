import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import CustomButton from '../components/CustomButton';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

function Home({navigation}) {
  const currentUser = auth().currentUser;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '858202352130-qhuk9inh0uguivmht1uerighc6qlkt5t.apps.googleusercontent.com',
    });
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      const currentUser = await GoogleSignin.getCurrentUser();
      auth().signOut();
      navigation.replace('Auth');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: currentUser.photoURL}} />
      <Text>{currentUser.email}</Text>
      <Text>{currentUser.displayName}</Text>
      {/* <Text>{user}</Text> */}
      <CustomButton
        onPress={signOut}
        text={'Sign Out'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  },
  logo: {
    width: '90%',
    height: 400,
  },
});

export default Home;
