import {View, Text, StyleSheet, Image} from 'react-native';
import React,{useState} from 'react';
import CustomButton from '../components/CustomButton';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

function Home({navigation}) {
  const currentUser = auth().currentUser;
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      const currentUser = await GoogleSignin.getCurrentUser();
      auth().signOut();
      setuserInfo([]);

      console.log(currentUser);
      // this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri:currentUser.photoURL}}/>
      <Text>{currentUser.email}</Text>
      <Text>{currentUser.displayName}</Text>
      {/* <Text>{user}</Text> */}
      <CustomButton
        onPress={() =>
          signOut().then(() => {
            navigation.navigate('Auth',{
              userInfo:null
            });
          })
        }
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
