import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { JournalContext } from '../context/JournalContext';

export default function NewEntryScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const { setEntries } = useContext(JournalContext);

  const handleSave = () => {
    if (!title.trim() || !message.trim()) {
      alert('Please fill in both fields.');
      return;
    }
    
    const newEntry = {
      id: Date.now().toString(),
      title,
      message,
    };
    
    setEntries(prevEntries => [...prevEntries, newEntry]);
    
    setTitle('');
    setMessage('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Journal Entry</Text>
      <TextInput
        style={styles.inputTitle}
        placeholder="Enter title"
        placeholderTextColor={"#000000"}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.inputMessage}
        placeholder="Enter your message"
        placeholderTextColor={"#000000"}
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Button title="Save Entry" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#8AC850' },
  header: { fontSize: 20, marginBottom: 15 },
  inputTitle: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  inputMessage: {
    height: 100, 
    borderColor: '#0000000',
    borderWidth: 1,
    padding: 5,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
});