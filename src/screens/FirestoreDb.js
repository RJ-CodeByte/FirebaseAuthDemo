import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function FirestoreDb(){
    const [loading, setloading] = useState(true);
    const [cities, setCities] = useState([]);


    useEffect(() => {
      const subscriber=firestore()
      .collection('cities')
      .onSnapshot((querySnapshot )=>{
          const cities = [];
          querySnapshot.forEach(documentSnapshot  => {
              cities.push({
                  ...documentSnapshot.data(),
                  key:documentSnapshot.id,
              });
          });
          setCities(cities);
          setloading(false);

      });
      return () => subscriber();
    }, []);
    

    if(loading){
        return <ActivityIndicator/>;
    }

    
    
  return (
    <View style={styles.body}>
      <FlatList
      data={cities}
      renderItem={({item})=>(
        <View style={styles.items}>
        <Text>City Name: {item.city_name}</Text>
      </View>
      )}
      />
    </View>
  );
};

export default FirestoreDb;

const styles = StyleSheet.create({
    body:{
        flex:1,
    },
    items: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        width: '100%',
        height: 80,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
