import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Success = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.title}>Success !!</Text>
      </View>
      <Text style={styles.paragraph}>
        You have successfully started your day we appreciated
      </Text>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  paragraph: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
    marginHorizontal: 50,
    textAlign: 'center',
    lineHeight: 30,
  },
});
