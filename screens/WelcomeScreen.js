import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, IconButton, Title } from 'react-native-paper';
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
      <Appbar.Header style={styles.appbar}>
        <IconButton
          icon="account-circle"
          color="#1E88E5"
          size={28}
          onPress={handleViewProfile}
          style={styles.iconButton}
        />
        <IconButton
          icon="magnify"
          color="#1E88E5"
          size={28}
          onPress={handleSearchProfile}
          style={styles.iconButton}
        />
        <IconButton
          icon="logout"
          color="#1E88E5"
          size={28}
          onPress={handleLogout}
          style={styles.iconButton}
        />
      </Appbar.Header>

      {/* Título "Welcome" fuera del Appbar */}
      <View style={styles.titleContainer}>
        <Title style={styles.title}>Welcome</Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Fondo azul claro
  },
  appbar: {
    backgroundColor: 'transparent', // Fondo transparente en la barra
    elevation: 0, // Sin sombra
    justifyContent: 'space-between',
    width: '100%',
  },
  titleContainer: {
    marginTop: 20, // Espacio desde el Appbar
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#0D47A1', // Color del texto para el título
  },
  iconButton: {
  },
});

export default WelcomeScreen;