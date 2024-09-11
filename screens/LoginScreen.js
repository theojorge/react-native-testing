import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { TextInput, Button, Title, Paragraph, Card, HelperText, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    let valid = true;
    if (!username) {
      setUsernameError(true);
      valid = false;
    } else {
      setUsernameError(false);
    }
    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'WelcomeScreen' }],
      });
    } else {
      Alert.alert('Error', 'Por favor, ingresa todos los campos.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/twits.png')} style={styles.image} />
      <Title style={styles.title}>TwitSnap</Title>
      <Paragraph style={styles.subtitle}>Please enter your credentials</Paragraph>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            style={styles.input}
            label="Username"
            value={username}
            onChangeText={setUsername}
            theme={{ colors: { primary: '#1E88E5' } }}
            error={usernameError}
          />
          <HelperText type="error" visible={usernameError}>
            Username is required
          </HelperText>
          <Divider style={styles.divider} />
          <TextInput
            style={styles.input}
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            theme={{ colors: { primary: '#1E88E5' } }}
            error={passwordError}
          />
          <HelperText type="error" visible={passwordError}>
            Password is required
          </HelperText>
          <Divider style={styles.divider} />
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>
          <Button mode="text" onPress={handleRegister} style={styles.registerButton}>
            Don't have an account? Register
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#E3F2FD',
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    color: '#0D47A1',
  },
  subtitle: {
    marginBottom: 24,
    textAlign: 'center',
    color: '#0D47A1',
  },
  card: {
    padding: 16,
    elevation: 4,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#1E88E5',
  },
  registerButton: {
    marginTop: 12,
  },
  divider: {
    marginVertical: 8,
  },
});

export default LoginScreen;