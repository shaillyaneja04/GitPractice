import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from './src/styles'; 

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Shani!</Text>
        <Text style={styles.text}>Your React Native SPA is working.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default App;