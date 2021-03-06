import React, {useState} from 'react';    //Import the UseState Hook.
import { View, Text, Button, StyleSheet} from 'react-native';   //Import the Button Component.

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });

const ButtonCount = () => {

  //Typicaly and variables or functions you want relating to your Component will be put before the return statement
  
  const [ count, setCount ] = useState(0);    //The Hook defines a variable( count ) initialized as 0 that will change 
                                                //based on user input and a function( setCount ) that sets the varable.
  return (
    <View style={styles.container}>                           
      <Text>You clicked {count} times.</Text>   //Expression that displays the count variable.
      <Button                                                                                                             
        onPress = { () => setCount(count + 1)}    //Count will increase by 1 when the button is pressed.
        title="Click me!"   //The Button Component is titled "Clck Me!".
      />
    </View>
  );
};


export default ButtonCount;
