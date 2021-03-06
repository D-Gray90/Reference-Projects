import React from 'react';		//Import the react library.
import { View, Text,} from 'react-native';		//Import the necessary native Components.

//It is best to name all your Components with uppercase letter. React will not let you call a lowercase name Component when customizing.
//Notice all native Components( View, Text, Button...etc) start with uppercase letters.

const BasicView = () => {		//Definition of Component.
  return (
    <View style={{ flex:1, justifyContent: "center", alignItems: "center"}}>	//View Component with inline styles.
      <Text>Hello, world!</Text>		//Text Component.
    </View>
  );
};


export default BasicView;		//Display Component.