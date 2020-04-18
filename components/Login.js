import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function Login() {
  return (
    <View>
      <Text>React Native App</Text>
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
