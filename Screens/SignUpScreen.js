import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const { signUp } = useContext(AuthContext);

  const handleSignUp = async () => {
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Please fill both fields.");
      return;
    }
    try {
      await signUp(email.trim(), password);

    } catch (e) {
      console.error("SignUp error:", e);
      
      setError(e.message || "Failed to create account.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password (min 6 chars)"
        placeholderTextColor="#000"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FF6F61', justifyContent: 'center', padding: 20 },
  header:    { fontSize: 28, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 20 },
  error:     { color: 'yellow', textAlign: 'center', marginBottom: 10 },
  input:     { borderBottomWidth: 1, borderBottomColor: '#000', marginBottom: 20, color: '#000' },
  button:    { backgroundColor: '#FFAA1D', padding: 15, borderRadius: 25, alignItems: 'center' },
  buttonText:{ color: '#000', fontWeight: 'bold' },
  link:      { marginTop: 15, color: '#000', textAlign: 'center', textDecorationLine: 'underline' },
});