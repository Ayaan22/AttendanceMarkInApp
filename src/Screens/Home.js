import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [asyncValue, setasyncValue] = useState(null);
  useEffect(() => {
    const getAsyncValue = async () => {
      const value = await AsyncStorage.getItem('key');
      setasyncValue(value);
    };

    getAsyncValue();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 20}}>
      <StatusBar backgroundColor="transparent" barStyle={'dark-content'} />
      <Text
        style={{
          fontSize: 25,
          textAlign: 'left',
          color: 'black',
          fontWeight: '300',
          textDecorationLine: 'underline',
          marginTop: StatusBar.currentHeight,
        }}>
        WELCOME TO
      </Text>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'left',
          color: 'black',
          fontWeight: '300',
          textDecorationLine: 'underline',
        }}>
        CODES OF AYAAN
      </Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Selfie');
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: 'black',
            height: 60,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'left',
              color: 'white',
              fontWeight: '300',
            }}>
            {asyncValue ? 'End Day' : 'Start Day'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
