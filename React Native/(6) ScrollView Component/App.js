import React from 'react';
import { Image, ScrollView, Text } from 'react-native'; //Import the ScrollView and Image Components.

//Its best to write all needed javascript before you define your Components if possible.

const logo = {      //object with 3 properties.
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

export default ScrollingApp = () => (       //Display app on definition.
  <ScrollView>      //You can scroll between the content within the component.
    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
    <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
    <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />   
    <Image source={logo} />     //Image displayed with the properties of the object.
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 80 }}>React Native</Text>
  </ScrollView>
);