import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import CustomButton from '../components/CustomButton';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

function Home({navigation,route}) {
  const currentUser = auth().currentUser;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '858202352130-qhuk9inh0uguivmht1uerighc6qlkt5t.apps.googleusercontent.com',
    });
  }, []);

  const signOut = async () => {
      auth().signOut();
      if(GoogleSignin.isSignedIn()){
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await GoogleSignin.getCurrentUser();
      }
      navigation.replace('Auth');
  };

  return (
    <View style={styles.container}>
      {currentUser.photoURL ? (
        <Image style={styles.logo} source={{uri: currentUser.photoURL}} />
      ) : null}
      <Text>{currentUser.email}</Text>
      <Text>{currentUser.displayName}</Text>
      {/* <Text>{user}</Text> */}
      <CustomButton onPress={signOut} text={'Sign Out'} />
      <CustomButton onPress={()=>navigation.navigate('FirestoreDb')} text={'Firestore FLATLIST'} />
      <CustomButton onPress={()=>navigation.navigate('FirestoreCRUD')} text={'Firestore CRUD'} />
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
