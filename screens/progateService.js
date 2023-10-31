import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProgateService = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener('focus', () => alert('ProgateService screen is focused'));
    navigation.addListener('blur', () => alert('ProgateService screen is unfocused'));
    navigation.addListener('state', (event) => console.log(event.data.state));
  });
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginBottom20]}>Welcome to Progate!</Text>
      <Text>Progate is an online platform where you can learn coding.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  marginBottom20: {
    marginBottom: 20,
  },
});

export default ProgateService;
