import React from 'react';
import { View, Text, StyleSheet} from 'react-native';   //Import the StyleSheet Component for better styling.

const styles = StyleSheet.create({    //Create Stylesheet. It's good practice to use StyleSheets .
    center: {
      alignItems: "center"
    }
  });

const Greeting = (props) => {   //Definition of Component with 'props' as a parameter.
  return (
    <View style={styles.center}>    //The style is defined in the StyleSheet and called here.
      <Text>Hello {props.name}!</Text>    //{props.name} is a javascript expression( { } ) which will display the name prop.
                                              //Expressions are used when you want to use javascript code inside your Components.
                                              //Notice that styles are put in expressions.
    </View>
  );
};

const CustomGreeting = () => {
  return (
    <View style={[styles.center, { top: 50, } ]}>   //For multiple Styles, use an array( [ ] ).
      <Greeting name = 'Huey'/>   //The Defined Component will be given the prop( variable ) name.
      <Greeting name = 'Duey'/>
      <Greeting name = 'Luey'/>
    </View>
  );
};


export default CustomGreeting;
