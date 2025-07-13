import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '/Users/maram/NuzulApp/axios'; 

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  api.get('/users')  
    .then(res => setUsers(res.data))
    .catch(err => console.error('API Error:', err));
}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.user}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 22, fontWeight: 'bold' },
  user: { fontSize: 18, marginVertical: 5 },
});
