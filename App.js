import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import api from '/Users/maram/NuzulApp/axios';

// create a reusable component to render a single property
const PropertyCard = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.label}>Property Name:</Text>
    <Text style={styles.value}>{item.name}</Text>

{item.image && (
      <>
        <Text style={styles.label}>Image:</Text>
        <Image style={styles.image} source={{ uri: item.image }} />
      </>
    )}

    <Text style={styles.label}>Description:</Text>
    <Text style={styles.value}>{item.Desc}</Text>

    <Text style={styles.label}>Address: </Text>
    <Text style={styles.value}>{item.address}</Text>
    <Text style={styles.label}>Price: </Text>
    <Text style={styles.value}>{item.Price}</Text>

    
  </View>
);

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/Prop')
      .then(res => setItems(res.data))
      .catch(err => console.error('API Error:', err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Properties List</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PropertyCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginTop: 10,
  },
});
