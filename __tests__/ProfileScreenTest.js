import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProfileScreen from '../screens/ProfileScreen'; // Ajusta la ruta si es necesario

describe('ProfileScreen', () => {
  it('should render the profile screen with the default username', () => {
    const { getByText } = render(<ProfileScreen />);
    expect(getByText('@yourusername')).toBeTruthy();
  });

  it('should allow editing the username', () => {
    const { getByText, getByDisplayValue, getByPlaceholderText } = render(<ProfileScreen />);
    
    // Trigger the username to be editable
    fireEvent.press(getByText('@yourusername'));

    // Change the username
    fireEvent.changeText(getByPlaceholderText('Edit Username'), 'NewUsername');
    expect(getByDisplayValue('NewUsername')).toBeTruthy();
  });
});