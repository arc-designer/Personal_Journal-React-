import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.info}>Name: Kavya, Deep, Milan, Prabhjot.</Text>
      <Text style={styles.info}>Group: Cyber Spartans</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFAA1D', 
    padding: 20,
  },
  title: {
    fontSize: 28,        
    fontWeight: 'bold',  
    marginBottom: 20,
    color: '#333',        
  },
  info: {
    fontSize: 20,         
    fontWeight: 'bold',   
    marginBottom: 10,
    color: '#555',        
  },
});