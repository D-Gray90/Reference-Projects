import React, { useEffect, useState } from 'react';   //Import the UseEffect and UseState Hooks.
import { ActivityIndicator, FlatList, Text, View } from 'react-native';   //Import the ActivityIndicator and  FlatList Components.

export default NetworkConnectivity = () => {    //Hook initializing isLoading as true.
  const [isLoading, setLoading] = useState(true);   //Hook initializing data as an empty array.
  const [data, setData] = useState([]);

  useEffect(() => {

    //Personally, the following function is more readible for network request.

    async function fetchData(){   //Async / Await function fetches json and awaties a response.
      try{                                                                      
        let response = await fetch('https://reactnative.dev/movies.json');  //Request json data.
        let json = await response.json();   //Change json data to object.
        console.log(json);    //Although not needed, you can log you responses for debugging.
        setData(json.movies);   //Set Data variable to the object you retreived.

      }catch(error){              
        console.log(error);   //Log errors.
        alert("Network Error| Please restart the application.")   //Alert the user of an error with a pop-up window.
      }finally{
        setLoading(false);    //If all data was recived without error, set isLoading to false.
      }
    }

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      { isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : (   //Conditional expression that states if isLoading is true, display a 
                                                                                //loading icon( ActivityLoader Component ). If false, continue 
                                                                                //displaying the rest of the View. At this time a bug exist 
                                                                                //in react native for android. unless you specify a color the
                                                                                //ActivityLoader will not display.

        <FlatList   //FlatList displays a list with each item below the other.

          //The Component will know to for a variable named data for its content.

          keyExtractor={({ id }, index) => id}    //The id attribute within the data will define each list item.
          renderItem={({ item }) => (   //For every list item display the following component.                                                                               
            <Text>{item.title}, {item.releaseYear}</Text>   //Think of item as a prop that holds all the data for a list item.
          )}
        />
      )}
    </View>
  );
};