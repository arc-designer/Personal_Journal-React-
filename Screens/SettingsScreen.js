import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.info}>This app is a personal journal application created by Cyber Spartans.</Text>
      <Text style={styles.info}>Version: 1.0.0</Text>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFAA1D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    justifyContent:'center',
    fontWeight:'bold',
    marginBottom: 15,
  },
  info: {
    fontSize: 20,
    justifyContent:'center',
    marginBottom: 15,
  }
});