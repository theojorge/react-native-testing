import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, Card } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Avatar.Image
          size={100}
          source={{ uri: 'https://your-avatar-url.com' }} // Reemplaza con una URL válida o usa una imagen local
          style={styles.avatar}
        />
        <Text style={styles.username}>@yourusername</Text>
      </View>

      <Card style={styles.card}>
        <Card.Title title="Bio" />
        <Card.Content>
          <Text>Your short bio goes here. You can add some details about yourself, your interests, etc.</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Fondo azul claro para un look de Material Design
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D47A1',
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});

export default ProfileScreen;