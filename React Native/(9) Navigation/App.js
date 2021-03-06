import 'react-native-gesture-handler';    //This must be the first line in file for navigation
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';   //Import NavigationContainer from imstalled dependencies.
import { createStackNavigator } from '@react-navigation/stack';   //Import createStackNavigator from imstalled dependencies.

const Stack = createStackNavigator();   //Create the StackNavigator variable.

//For navigation Its best to first define the components you plan to navigate between.
//This is because with navigation you will later define what components are used for each screen.

const HomeScreen = ({navigation}) => {    //Each Component must have a {navigation} prop.
  return (
      <View style={styles.body}>
      	<Text>Home</Text>
      	<Button
      		onPress={() => navigation.navigate('Details', { name: 'Jane' })}    //Navigate to the Screen named "Details", passing the name prop.
      		title='Details'
      	/>
      </View>
  );
};

const DetailsScreen = ({navigation, route}) => {    //The route holds all data passed between screens.
  return (
      <View style={styles.body}>
      	<Text>Details</Text>
      	<Text>This is {route.params.name}'s profile</Text>   //Displays name prop passed through the route.
      </View>
  );
};

const NavApp = () => {                                                           
  return (

    <NavigationContainer>   //Everything must be placed inside this container.
      <Stack.Navigator>     //Everything must be placed inside this container also. This is where the navigation begins.
        <Stack.Screen       //Screen will contain your Components 
          name="Home"       //Screen name
          component={HomeScreen}    //This screen contains the HomeScreen Component.
          options={{ title: 'Welcome' }}    //The top of the screen will display your title.
        />
        <Stack.Screen name="Details" component={DetailsScreen} />   //This screen contains the DetailsScreen Component.
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  body: {
  	flex: 1,
    fontSize: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default NavApp;
