import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/Login.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password?');
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

  const onDontHaveAccountPressed = () => {
    // console.warn("You Dont't have acccount");
    navigation.navigate('SignUp');
  };

  return (
    // <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.body}>
        <Image
          style={[styles.logo, {height: height * 0.3}]}
          source={Logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Login Yourself</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text={'Sign In'}
          onPress={onSignInPressed}
          type={'PRIMARY'}
        />
        <CustomButton
          text={'Forgot Password?'}
          onPress={onForgotPasswordPressed}
          type={'TERTIARY'}
        />
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
          text={"Dont't have an account? Create One"}
          onPress={onDontHaveAccountPressed}
          type={'TERTIARY'}
        />
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9FBFC',
    padding: 30,
  },
  logo: {
    width: '90%',
    maxWidth: 400,
    maxHeight: 200,
  },
  text: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 20,
  },
});
