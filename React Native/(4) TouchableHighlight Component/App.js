import React, {useState} from 'react';    
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';    //Import the TouchableHighlight Component.




const TouchCustomButton = () => {
  const [isPressed,setPressed] = useState(false);
  return (
   <View style={styles.container}>
    <TouchableHighlight   //Component is now touchable will be highlighted when pressed.
      onPressIn={ (event) => {    //When pressed set isPressed to true.
        setPressed(true);
      }}
      onPressOut={ (event) => {   //When pressed set isPressed to false.
        setPressed(false);
      }}
      style={styles.touchable}>   //The Component will be styled into a customized button.
      <View style={styles.button}>    //The actual button styles will be applied to the View Component.
        <Text style={styles.welcome}>
          {isPressed ? 'EEK!' : 'PUSH ME'}    //Conditional expression that states if isPressed is true, display
                                                 //text "EEK!". If false display text "PUSH ME". 
        </Text>
      </View>
    </TouchableHighlight>
   </View>
  );
};



var styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
welcome: {
fontSize: 20,
textAlign: 'center',
margin: 10,
color: '#FFFFFF'
},
touchable: {
borderRadius: 100   //Button will be a circle.
},
button: {
backgroundColor: '#FF0000',
borderRadius: 100,
height: 200,
width: 200,
justifyContent: 'center'
},
});


export default TouchCustomButton;
