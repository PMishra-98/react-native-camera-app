import AsyncStorage from '@react-native-community/async-storage';
import React,{useState} from 'react';
import { StyleSheet,View, Text,
TouchableOpacity,
Button,
Image,
ImagePropTypes} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default function CameraComponent()  {
  const [image, setImage]=useState('');
  
  const takePhoto=()=>{
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      console.log(img);
      setImage(img.path);
    });
  }
  const choosePhoto=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(img => {
      console.log(img);
      setImage(img.path);
    });
  }
  return (
    <>
 
    <Text style={{textAlign:'center'}}>
    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </Text>
   <View style={{margin:30,textAlign:'center'}}>
     <Button onPress={takePhoto} title="take Photo" />
       </View>
       <View style={{flex:0,marginHorizontal:30,textAlign:'center'}}>
       <Button onPress={choosePhoto} title="choose Photo" />
    </View>
    <View style={{flex:0,margin:30,textAlign:'center'}}>
    <LocalStorage image={image}/>
    </View>
    
   
 </>
           
  );
};



function LocalStorage(props)  {
  const getData = async () => {
     try {
       await AsyncStorage.setItem('@storage_Key', props.image);
     
       const value = await AsyncStorage.getItem('@storage_Key');
       if(value !== null) {
         alert(value);
       }
     } catch(e) {
       // error reading value
     }
   }
   return (
     <>
        <View style={{flex:0,marginHorizontal:30,textAlign:'center'}}>
        <Button onPress={getData} title="Get Image link" />
     </View>
  </>
            
   );
 };
 