import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { JournalContext } from '../context/JournalContext';

export default function HomeScreen() {
  const { entries } = useContext(JournalContext);
  const navigation = useNavigation();

  return (
    <ImageBackground
    
      style={styles.background}
      resizeMode="cover"
    >
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.noteBox}
            onPress={() => navigation.navigate('ViewEntry', { id: item.id })}
          >
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteMessage} numberOfLines={3}>
              {item.message}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes yet. Tap + to add one.</Text>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('New')}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#8AC850', // fallback
  },
  list: {
    padding: 20,
    paddingBottom: 100, // give room for FAB
  },
  noteBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android elevation
    elevation: 3,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  noteMessage: {
    fontSize: 14,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 50,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 30,   
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFAA1D',
    justifyContent: 'center',
    alignItems: 'center',
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});