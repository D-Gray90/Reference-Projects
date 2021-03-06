import React, {useState} from 'react';
import { View, Text, StatusBar, TextInput} from 'react-native';     //Import the TextInput Component.

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput                                                                                        
        style={{height: 40}}
        placeholder="Type here to translate!"   //Text input bar area will display the text "Type here to translate!" before input.
        onChangeText={text => setText(text)}    //The text variable will change every time you input text.
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}    //For each word a pizza emoji will be displayed.
      </Text>
    </View>

  );
}

export default PizzaTranslator;