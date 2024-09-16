import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';  // Asegúrate de que la ruta sea correcta
import { NavigationContainer } from '@react-navigation/native';

describe('LoginScreen', () => {
  const setup = () => {
    return render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );
  };

  it('should display required field errors when login button is pressed without entering username and password', async () => {
    const { getByText, getByPlaceholderText } = setup();

    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      expect(getByText('Username is required')).toBeTruthy();
      expect(getByText('Password is required')).toBeTruthy();
    });
  });

  it('should login successfully with valid inputs and navigate to WelcomeScreen', async () => {
    const { getByText, getByPlaceholderText } = setup();

    fireEvent.changeText(getByPlaceholderText('Username'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getByText('Login'));

    await waitFor(() => {
      // Asume que `WelcomeScreen` es la pantalla a la que navega
      expect(getByText('WelcomeScreen')).toBeTruthy();
    });
  });

  it('should navigate to RegisterScreen when "Don\'t have an account? Register" button is pressed', async () => {
    const { getByText } = setup();

    fireEvent.press(getByText("Don't have an account? Register"));

    await waitFor(() => {
      // Asume que `RegisterScreen` es la pantalla a la que navega
      expect(getByText('RegisterScreen')).toBeTruthy();
    });
  });

  it('should navigate to ForgotPasswordScreen when "Forgot Password?" button is pressed', async () => {
    const { getByText } = setup();

    fireEvent.press(getByText('Forgot Password?'));

    await waitFor(() => {
      // Asume que `ForgotPasswordScreen` es la pantalla a la que navega
      expect(getByText('ForgotPasswordScreen')).toBeTruthy();
    });
  });
});