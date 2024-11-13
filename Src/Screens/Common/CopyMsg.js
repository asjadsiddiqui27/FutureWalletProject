// CustomFlashMessage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomFlashMessage = ({ message }) => {
  return (
    <LinearGradient
      colors={['#00BEF2', '#008DB4', '#005360']} 
      style={styles.container}
    >
      <Text style={styles.text}>{message}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomFlashMessage;
