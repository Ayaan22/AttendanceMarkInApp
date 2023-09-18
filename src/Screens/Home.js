import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 20}}>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'left',
          color: 'black',
          fontWeight: '300',
          textDecorationLine: 'underline',
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
            Start Day
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
