import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class ArtistBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.artistBox}>
        <Image source={this.props.image} style={styles.image} />
        <Text>{this.props.name}</Text>
        <View style={styles.icons}>
          <Icon name="add" style={styles.icon} />
          <Icon name="add" style={styles.icon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: '0.5em',
  },

  image: {
    height: 150,
    width: 150,
  },

  icons: {
    display: 'flex',
    flexDirection: 'row',
  },

  icon: {
    fontSize: 40,
  },

  name: {
    flexDirection: 'row',
    paddingTop: '0.5em',
    fontSize: 20,
  },
});

export default ArtistBox;
