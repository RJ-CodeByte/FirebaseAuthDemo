import {Text, StyleSheet, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';

import remoteConfig from '@react-native-firebase/remote-config';

export default function RmtConfig() {
  const [name, setName] = useState('Awsome Project');
  const [backgroundColor, setbackgroundColor] = useState('white');
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    remoteConfig()
      .setDefaults({
        awesome_new_feature: false,
        screen_color: 'white',
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(fetchedRemotely => {
        if (fetchedRemotely) {
            const awesomeNewFeature = remoteConfig().getValue('awesome_new_feature');
            const bgColorFeature = remoteConfig().getValue('screen_color');
            
            setName(awesomeNewFeature.asBoolean() ? "Enabled" : "Disabled");
            setbackgroundColor(bgColorFeature.asString());
            // console.log('Configs were retrieved from the backend and activated.');
        } else {
            const awesomeNewFeature = remoteConfig().getValue('awesome_new_feature');
            const bgColorFeature = remoteConfig().getValue('screen_color');
            console.log(bgColorFeature.asString());
            console.log(awesomeNewFeature.asString());
            setName(awesomeNewFeature.asBoolean() ? "Enabled" : "Disabled");
            setbackgroundColor(bgColorFeature.asString());
            // console.log(
            //   'No configs were fetched from the backend, and the local configs were already activated',
            // );
          }
      })

   
  }, []);

  return (
    <View
      style={[
        styles.body,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

// export default class RmtConfig extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Awesome Feature is disabled',
//       backgroundColor: 'white',
//     };
//   }

//   componentDidMount() {
//     remoteConfig()
//       .setDefaults({
//         awesome_new_feature:false,
//         screen_color: 'white',
//       })
//       .then(() => remoteConfig().fetchAndActivate())
//       .then(fetchedRemotely => {});

//     const awesomeNewFeature = remoteConfig().getValue('awesome_new_feature');
//     const bgColorFeature = remoteConfig().getValue('screen_color');
//     console.log(bgColorFeature.asString());
//     console.log(awesomeNewFeature.asString());
//     this.setState({
//         name:awesomeNewFeature.asString(),
//         backgroundColor: bgColorFeature.asString(),
//     });
//   }

//   render() {
//     return (
//       <View
//         style={[
//           styles.body,
//           {
//             backgroundColor: this.state.backgroundColor,
//           },
//         ]}>
//         <Text style={styles.text}>{this.state.name}</Text>
//       </View>
//     );
//   }
// }
