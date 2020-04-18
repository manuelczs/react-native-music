import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import ArtistBox from './components/ArtistBox';

class App extends React.Component {
  render() {
    const image =
      'https://direct.rhapsody.com/imageserver/images/alb.49919858/500x500.jpg';
    const name = 'Luis Salinas';
    return (
      <>
        <View style={styles.container}>
          <ArtistBox image={image} name={name} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

export default App;
