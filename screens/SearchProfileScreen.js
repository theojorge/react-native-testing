import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const SearchProfileScreen = () => {
  const handleSearch = () => {
    // Lógica para buscar perfiles
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Profiles</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter username" 
      />
      <Button title="Search" onPress={handleSearch} />
      {/* Aquí puedes mostrar los resultados de la búsqueda */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    width: '80%',
    paddingHorizontal: 10,
  },
});

export default SearchProfileScreen;