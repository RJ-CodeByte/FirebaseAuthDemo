import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../components/CustomButton';
import firestore from '@react-native-firebase/firestore';
import CustomInput from '../components/CustomInput';

export default function FirestoreCRUD() {
  const [loading, setloading] = useState(true);
  const [userDoc, setUserDoc] = useState('null');
  const [text, setText] = useState('');

  useEffect(() => {
    Read();   
  }, []);

//   if(userDoc!=null){
//       setText(userDoc.Bio);
//   }
  

  const Create = () => {
    firestore()
      .collection('MyCollection')
      .doc('MyDocument')
      .set({
        Name: 'Jay Rana',
        Bio: 'Software engineer',
      })
      .then(function () {
        alert('Document successfully written!');
      })
      .catch(function (error) {
        alert('Error writing document: ', error);
      });
  };


  const Read = () => {
    firestore()
      .collection('MyCollection')
      .doc('MyDocument')
      .get()
  .then(documentSnapshot => {
    if (documentSnapshot.exists) {
        setUserDoc(documentSnapshot.data())
    //   console.log('User data: ', documentSnapshot.data());
    }else{
        alert("No Doc Found!!")
    }
    setText(userDoc.Bio);
})
  };

  const Update = (value) => {
      firestore().collection("MyCollection")
      .doc("MyDocument")
      .update(value).then(()=>{
          alert('Updated SuccessFully!!')          
      })
  };
  
  const Delete = () => { 
                firestore()
                .collection('MyCollection')
                .doc('MyDocument')
                .delete()
                .then(() => {
                alert('User deleted!');
                });
  };

  return (
    <View style={styles.contaner}>
      <CustomButton text={'create'} onPress={Create} />
      <CustomButton text={'Read'} onPress={Read} />
      {
          userDoc!='null' && 
          <View>
          <Text>{userDoc.Name}</Text>
          <Text>{userDoc.Bio}</Text>
          </View>
      }
      <CustomInput 
      placeholder={"Update Your Bio"}
      setvalue={(text)=>{setText(text)}}
      value={text}
      />
      <CustomButton text={'Update Doc'} onPress={()=>{
          Update({
              Bio:text,
            })
      }}
      disable={text==""}
      />

<CustomButton text={'Delete'} onPress={Delete} />
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});
