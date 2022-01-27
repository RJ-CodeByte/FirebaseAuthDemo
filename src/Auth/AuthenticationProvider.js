import auth from '@react-native-firebase/auth';
import {View, Text, Alert} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//signup handling
const signUp = async (username, email, password) => {
  if (!username || !email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }
  try {
    const cred = await auth()
      .createUserWithEmailAndPassword(email, password);
    const { uid } = cred.user;
    auth().currentUser.updateProfile({
      displayName: username,
    });
    return uid;
  } catch (err) {
    return Alert.alert(err.code, err.message);
  }
};

const signIn = async (email, password) => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  try {
    await auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    return Alert.alert(err.code, err.message);
  }
};

const forgetPassword = email => {
  if (!email) {
    Alert.alert('Error', 'Please enter email');
  }

  return auth().sendPasswordResetEmail(email);
};

const signOut = () => {
  return auth().signOut();
};


const Auth = {
    signUp,
    signIn,
    forgetPassword,
    signOut,
}

export default Auth;