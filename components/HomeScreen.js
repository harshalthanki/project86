import * as React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native';
import {Audio} from 'expo-av';


export default class HomeScreen extends React.Component{

  playSound = async() => {
     await Audio.Sound.createAsync(
      {uri: 'https://docs.google.com/uc?export=download&id=1fpA5pYQZVE_md4VbELrFvbjOFYxUwQPq'},
      {shouldPlay: true}
     );
    }
  render(){
    return(
      <View style={{backgroundColor:"black"}}>
      <Image 
      style={{width: "50%", height:"50%", backgroundColor:"black"}}
      source={require("../assets/wallpaper.png")}
      resizeMode="cover"
      />

      <TextInput
      style={styles.input}
      placeholder="ENTER YOUR NAME"
      placeholderTextColor="olive"
      />

      <TouchableOpacity
      style={styles.button}
      onPress={() => {
         this.playSound();
       }}>
      <Text style={styles.buttonText}> ATTACK ON TITAN </Text>
      </TouchableOpacity>
     
  
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
 button: {
  alignItems: 'center',
  borderRadius: 20,
  marginTop: 2,
  backgroundColor: 'black',
  borderWidth:10,
  height: 50,
  borderColor:'grey',
 },
 buttonText: {
   alignContent: 'center',
   alignItems: 'center',
   fontFamily: 'lucida handwriting',
   fontSize: 25,
  // margin:8,
   color: 'red',
   fontWeight:'bold',
 },
 input: {
    alignItems: 'center',
    fontFamily: 'castellar',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    fontWeight:'bold',
    color:'brown',
    backgroundColor:"orange"
  },
});