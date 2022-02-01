import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Login from './screens/Login';
import SignUp from './screens/Register';
import Home from './screens/Home';
import auth from '@react-native-firebase/auth';
import FirestoreDb from './screens/FirestoreDb';
import FirestoreCRUD from './screens/FirestoreCRUD';
import RmtConfig from './screens/remoteConfig';

const Stack = createNativeStackNavigator();


function AuthNavigator() {
  
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#0080ff'
        },
        headerTintColor:'#ffffff',
        headerTitleStyle:{
          fontSize:25,
          fontWeight:'bold'
        }
      }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FirestoreDb"
          component={FirestoreDb}
        />
        <Stack.Screen
          name="FirestoreCRUD"
          component={FirestoreCRUD}
        />
        <Stack.Screen
          name="RemoteConfig"
          component={RmtConfig}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
