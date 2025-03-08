import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { JournalContext } from '../context/JournalContext';

export default function JournalListScreen({ navigation }) {
  const { entries } = useContext(JournalContext);

  return (
    <ScrollView style={styles.container}>
      {entries.length === 0 ? (
        <Text>No entries yet.</Text>
      ) : (
        entries.map(entry => (
          <View key={entry.id} style={styles.entry}>
            <Text style={styles.entryTitle}>{entry.title}</Text>
            <Button title="View" onPress={() => navigation.navigate('ViewEntry', { id: entry.id })} />
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#8AC850',
  },
  entry: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#def',
    borderRadius: 5,
  },
  entryTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});