import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Title, Paragraph, Card, HelperText, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton'; 

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleRegister = () => {
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
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      valid = false;
    } else {
      setConfirmPasswordError(false);
    }

    if (valid) {
      Alert.alert('Success', 'Account registered successfully');
      navigation.navigate('LoginScreen');
    } 
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Register</Title>
      <Paragraph style={styles.subtitle}>Create a new account</Paragraph>
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
          <TextInput
            style={styles.input}
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            theme={{ colors: { primary: '#1E88E5' } }}
            error={confirmPasswordError}
          />
          <HelperText type="error" visible={confirmPasswordError}>
            Passwords do not match
          </HelperText>
          <Divider style={styles.divider} />
          <CustomButton title="Register" onPress={handleRegister} /> 
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
  divider: {
    marginVertical: 8,
  },
});

export default RegisterScreen;