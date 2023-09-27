import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import GetLocation from 'react-native-get-location';

const Selfie = ({navigation}) => {
  const [picture, setpicture] = useState(
    'https://previews.123rf.com/images/aguiters/aguiters1508/aguiters150800059/43551287-photo-camera-icon.jpg',
  );
  const [toggle, settoggle] = useState(true);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera({
          mediaType: 'photo',
          cameraType: 'font',
        });
        setpicture(result?.assets[0]?.uri);
        settoggle(false);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const checkPermissionOFGps = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Gps Permission',
          message:
            'Cool Photo App needs access to your Gps ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = async () => {
    await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        if (location) {
          navigation.navigate('Maps', {
            latitude: location.latitude,
            longitude: location.longitude,
            picture
          });
        }
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

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
        Take A SELFIE
      </Text>

      <View style={{flex: 1, paddingVertical: 10}}>
        <TouchableOpacity
          onPress={() => {
            requestCameraPermission();
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: '#F3F3F3',
            flex: 0.7,
            justifyContent: 'center',
          }}>
          <Image
            style={{flex: 1, resizeMode: 'contain'}}
            source={{uri: picture}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={toggle}
          onPress={() => {
            checkPermissionOFGps();
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: toggle ? 'gray' : 'black',
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
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Selfie;
