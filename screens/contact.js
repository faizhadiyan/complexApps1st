import React, { useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Alert } from 'react-native'; // Import Alert

const Contact = ({ navigation }) => {
  //   useEffect(() => {
  //     // alert('Contact screen is mounted');
  //     // return () => {
  //     //   alert('Contact screen is unmounted');
  //     // };
  //     // navigation.addListener('beforeRemove', (event) => {
  //     //   event.preventDefault();
  //     //   alert('Are you sure?');
  //     // });
  //   });

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // Show a confirmation dialog
      e.preventDefault();
      Alert.alert(
        'Confirm',
        'Are you sure you want to leave this screen?',
        [
          {
            text: 'No',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
              // User chose to leave the screen
              navigation.dispatch(e.data.action);
            },
          },
        ],
        { cancelable: false }
      );
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nama Anda" style={styles.textInput} />
      <TextInput placeholder="Pesan" style={styles.textInput} />
      <View style={styles.buttonContainer}>
        <Button title="Kirim" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Contact;
