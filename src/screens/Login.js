import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from '../../assets/Login.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '858202352130-qhuk9inh0uguivmht1uerighc6qlkt5t.apps.googleusercontent.com',
        offlineAccess:true,
    });
  }, []);

  const onSignInPressed = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter all fields');
    } else {
      try {
        await auth().signInWithEmailAndPassword(email, password);
      } catch (err) {
        return Alert.alert(err.code, err.message);
      }
    }
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password?');
  };

  const onSignInFBPressed = () => {
    console.warn('Sign in with facebook');
  };

  const onSignInGooglePressed = async () => {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // console.log(googleCredential);
      await auth().signInWithCredential(googleCredential);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
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
        <CustomInput placeholder="email" value={email} setvalue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text={'Sign In'}
          onPress={() => {
            onSignInPressed().then(() => {
              auth().onAuthStateChanged(user => {
                if (user) {
                  navigation.replace('Home');
                } else {
                  navigation.replace('Auth');
                }
              });
            });
          }}
          type={'PRIMARY'}
        />
        <CustomButton
          text={'Forgot Password?'}
          onPress={onForgotPasswordPressed}
          type={'TERTIARY'}
        />
        <CustomButton
          text={'Sign In With Google'}
          onPress={() => {
            onSignInGooglePressed().then(() => {
              auth().onAuthStateChanged(user => {
                if (user) {
                  navigation.replace('Home');
                } else {
                  navigation.replace('Auth');
                }
              });
            });
          }}
          bgColor="#FAE9EA"
          fgColor="#ff6b6b"
        />
        <CustomButton
          text={'Sign In With Facebook'}
          onPress={onSignInFBPressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
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
