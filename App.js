import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, ActivityIndicator, FlatList, Text, View, Alert, BackHandler } from 'react-native';

//--------------------------------

//-------------------------------
export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);



  useEffect(() => {
    fetch('https://www.devnoorulkarim.com/projects/mubeena.json')
      .then((response) => response.json())
      .then((json) => setData(json.inspire))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }} style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View >
              <Image source={require('../inspire/assets/dance.gif')} />
              <Text style={[styles.title]}>Quote of the day</Text>
              <Text style={[styles.quote]}>  "{item.quote}"</Text>
              <Text style={[styles.author]}> ~{item.author}</Text>

              <View style={[styles.button]}>
                <Button
                  title="Close app"
                  onPress={() => BackHandler.exitApp()}
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  button: {
    color: 'grey',
    marginVertical: 200,
    marginLeft: 100,
    marginRight: 100,

  },
  title: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 20,
    textAlign: 'center',
  },
  quote: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  author: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 20,
    textAlign: 'center',
  },
});