import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!!</Text>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF6F61' }]}
          onPress={() => navigation.navigate('JournalList')}
        >
          <Text style={styles.buttonText}>View Entries</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#6B5B95' }]}
          onPress={() => navigation.navigate('NewEntry')}
        >
          <Text style={styles.buttonText}>New Entry</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#7A3EAB' }]}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#333333' }]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.banner}>
     {/* <Text style={styles.bannerText}>This is Image</Text> */}
        <Text style={styles.bannerText}>Cyber Spartans</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8AC850',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    height: 100,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  banner: {
    flex: 1, 
    width: '100%',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,   
    overflow: 'hidden', 
  },
  bannerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
});