
import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import SignUp from './src/screens/Register';


const Stack=createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',    
    backgroundColor:'#20ffff'
  }
});





