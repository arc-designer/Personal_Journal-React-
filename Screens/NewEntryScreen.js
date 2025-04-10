import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { JournalContext } from '../context/JournalContext';
import { addDoc, collection } from 'firebase/firestore';
import { firestore, auth } from '../firebase';

export default function NewEntryScreen({ navigation }) {
  const [title, setTitle]     = useState('');
  const [message, setMessage] = useState('');
  const { setEntries }        = useContext(JournalContext);

  const handleSave = async () => {
    if (!title.trim() || !message.trim()) {
      alert('Please fill in both fields.');
      return;
    }

    try {
      await addDoc(
        collection(firestore, 'users', auth.currentUser.uid, 'entries'),
        {
          title,
          message,
          createdAt: new Date()
        }
      );
     
      setTitle('');
      setMessage('');
    } catch (e) {
      console.error('Error saving entry:', e);
      alert('Could not save entry.');
    }
  };

  const handleBack = () => {
    
    setTitle('');
    setMessage('');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Journal Entry</Text>
      <TextInput
        style={styles.inputTitle}
        placeholder="Enter title"
        placeholderTextColor="#000"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.inputMessage}
        placeholder="Enter your message"
        placeholderTextColor="#000"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button title="Save Entry" onPress={handleSave} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Back" onPress={handleBack} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#8AC850',
  },
  header: {
    fontSize: 20,
    marginBottom: 15,
    color: '#000',
  },
  inputTitle: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    backgroundColor: 'transparent',
    color: '#000',
  },
  inputMessage: {
    height: 100,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    marginBottom: 15,
    textAlignVertical: 'top',
    backgroundColor: 'transparent',
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});