import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import Auth from './../Auth/AuthenticationProvider';

const Home = ({navigation}) => {
  const signOut = () => {
    Auth.signOut().then(() => navigation.navigate('Login'));
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <CustomButton onPress={() => signOut()} text={'Sign Out'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  },
});

export default Home;
