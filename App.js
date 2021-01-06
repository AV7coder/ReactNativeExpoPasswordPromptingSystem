import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      var first_name = <TextInput>First Name</TextInput>
      var last_name = <TextInput>Last Name</TextInput>
      if (first_name === "Aaditya" and last_name==="Vyas"){<Text>CORRECT</Text>}
      else{<Text>Wrong</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
