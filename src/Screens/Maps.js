import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import axios from 'axios';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Maps = ({route}) => {
  const latitude = route.params.latitude;
  const longitude = route.params.longitude;
  const picture = route.params.picture;

  const navigation = useNavigation();

  const handleDay = async () => {
    const value = await AsyncStorage.getItem('key');
    if (value) {
      navigation.replace('Success');
      AsyncStorage.removeItem('key');
    } else {
      AsyncStorage.setItem('key', 'start');
      navigation.navigate('Success');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <MapView
        style={{
          flex: 1,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomWidth: 2,
          borderBottomColor: 'red',
        }}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        <Marker coordinate={{latitude: latitude, longitude: longitude}} />
      </MapView>

      <TouchableOpacity
        onPress={() => {
          handleDay();
        }}
        activeOpacity={0.8}
        style={{
          backgroundColor: 'black',
          height: 60,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 30,
          left: 20,
          right: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'left',
            color: 'white',
            fontWeight: '300',
          }}>
          CONTINUE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Maps;
