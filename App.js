import React from 'react';
import GpsComponent from './src/gpsComponent'
import {
  View,
  Text,
  StyleSheet} from 'react-native';
import CameraComponent from './src/cameraComponent';
const App= () => {
  return (
    <View style={styles.container}>
 
    <CameraComponent />
  
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
},
});

export default App;
