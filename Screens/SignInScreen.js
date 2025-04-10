import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function SignInScreen() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const { signIn, loading } = useContext(AuthContext);

  const handleSignIn = async () => {
    setError("");
    try {
      await signIn(email.trim(), password);
      
    } catch (e) {
      setError("Invalid email or password.");
    }
  };

  if (loading) return <ActivityIndicator size="large" style={{flex:1,justifyContent:'center'}}/>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      {!!error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6F61',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
    paddingVertical: 5,
    color: '#000',
  },
  button: {
    backgroundColor: '#FFAA1D',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    color: '#000',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});