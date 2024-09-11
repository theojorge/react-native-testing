import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });
  };

  const handleViewProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const handleSearchProfile = () => {
    navigation.navigate('SearchProfileScreen');
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Welcome</Title>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleViewProfile} style={styles.button}>
          View My Profile
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleSearchProfile} style={styles.button}>
          Search for Profiles
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleLogout} style={styles.button}>
          Logout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD', // Color de fondo azul claro
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#0D47A1', // Color del texto para el título
  },
  buttonContainer: {
    marginBottom: 16, // Espacio entre los botones
    width: '80%',   // Ajustar el ancho para el botón
  },
  button: {
    borderRadius: 4,
    backgroundColor: '#1E88E5',
  },
});

export default WelcomeScreen;