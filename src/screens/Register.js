import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Auth from './../Auth/AuthenticationProvider';

export default function SignUp({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    Auth.signUp(username, email, password);
    navigation.navigate('Login');
    // console.warn('Sign In');
  };

  const onSignInFBPressed = () => {
    console.warn('Sign in with facebook');
  };

  const onSignInGooglePressed = () => {
    console.warn('Sign In with Google');
  };

  const onSignInTwitterPressed = () => {
    console.warn('sign in with twitter');
  };

  const onAlreadyHaveAccountPressed = () => {
    navigation.goBack();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create An Account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setvalue={setemail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordRepeat}
          setvalue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton
          text={'Register'}
          onPress={onRegisterPressed}
          type={'PRIMARY'}
        />

        <Text style={styles.text}>
          By Registering, You Confirm that you accept our{' '}
          <Text style={styles.link}>Terms of Use</Text> &{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
        <CustomButton
          text={'Sign In With Facebook'}
          onPress={onSignInFBPressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text={'Sign In With Google'}
          onPress={onSignInGooglePressed}
          bgColor="#FAE9EA"
          fgColor="#ff6b6b"
        />
        <CustomButton
          text={'Sign In With Twitter'}
          onPress={onSignInTwitterPressed}
          bgColor="#B3E5FC"
          fgColor="#00B0FF"
        />
        <CustomButton
          text={'Already have an account? Login'}
          onPress={onAlreadyHaveAccountPressed}
          type={'TERTIARY'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 18,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
