import React, { useRef } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';    //Import the Flatlist( Type of ListView Component).

const AlphabetList = () => {
  return (
    <View style={styles.container}>
    	<FlatList
    		data={[ {letter: 'A'},{letter: 'B'},{letter: 'C'},    //The content for the list.
          			{letter: 'D'},{letter: 'E'},{letter: 'F'},
          			{letter: 'G'},{letter: 'H'},{letter: 'I'},
          			{letter: 'J'}
          		 ]}
            renderItem={    //For each item, display customized component.
            	({item}) =>  <Text style={styles.item}>{item.letter}</Text>   //The expression {item} refers to an object( {} ) named item.
                                                                                //({item}) is basically a paramenter for the render function. it holds the 
                                                                                //list item data. Here the FlatList knows the letter property in data 
                                                                                //object will determine each list item. If you have more than one property 
                                                                                //in your object you will need to use a keyExtractor to tell the list 
                                                                                //which property determines a list item.
                                                                                // It would look like "keyExtractor={({ letter }, index) => letter}"
        	}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    alignItems: 'center',
    top: 20
  },
  item: {
    padding: 10,
    height: 40,
    fontSize: 18
  }
});

export default AlphabetList;
