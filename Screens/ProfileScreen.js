import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Signed in as:</Text>
      <Text style={styles.email}>{user.email}</Text>
      <View style={styles.button}>
        <Button title="Sign Out" onPress={() => signOut()} color="#FF5555"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#8AC850', padding:20 },
  label:    { fontSize:16, color:'#fff', marginBottom:8 },
  email:    { fontSize:18, fontWeight:'bold', color:'#fff', marginBottom:20 },
  button:   { width:'60%', marginTop:10 },
});