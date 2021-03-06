import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './components/Login';

class App extends React.Component {
  render() {
    const image =
      'https://direct.rhapsody.com/imageserver/images/alb.49919858/500x500.jpg';
    const name = 'Luis Salinas';
    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Icon name="ios-heart-empty" size={30} color="#900" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },

  image: {
    height: 150,
    width: 150,
  },

  artistBox: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    paddingTop: '0.5em',
    fontSize: 20,
  },
});

export default App;
