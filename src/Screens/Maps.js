import {View, Text} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const Maps = ({route}) => {
  const latitude = route.params.latitude;
  const longitude = route.params.longitude;
  const picture = route.params.picture;

  console.log(picture);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        <Marker coordinate={{latitude: latitude, longitude: longitude}} />
      </MapView>
    </View>
  );
};

export default Maps;
