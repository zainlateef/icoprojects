import React, { useState, useEffect } from 'react';
import { Image, View, Text, Dimensions, StyleSheet, Platform } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Magnetometer } from 'expo-sensors';
import { Qibla } from 'qibla';
import * as Location from 'expo-location';

const { height, width } = Dimensions.get('window');

export default QiblaScreen = () => {

  const [subscription, setSubscription] = useState(null);
  const [magnetometer, setMagnetometer] = useState(0);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setLocation(location.coords);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.warn("latitude: ", latitude);
  console.warn("longitude: ", longitude);

  let qiblaFromTrueNorth = Qibla.degreesFromTrueNorth(latitude, longitude);

  useEffect(() => {
    _toggle();
    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((data) => {
        setMagnetometer(_angle(data));
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const _angle = (magnetometer) => {
    let angle = 0;
    if (magnetometer) {
      let { x, y } = magnetometer;
      if (Math.atan2(y, x, z ) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    };

    return  Math.round(angle);
  };

  const _direction = (degree) => {
    if (degree >= qiblaFromTrueNorth-5 && degree <= qiblaFromTrueNorth + 5){
      return 'Qiblah';
    }
    else if(degree < qiblaFromTrueNorth) {
      return 'Turn Right';
    }
    else if (degree > qiblaFromTrueNorth) {
      return 'Turn Left';
    }
  };

  // Match the device top with pointer 0° degree. (By default 0° starts from the right of the device.)
  const _degree = (magnetometer) => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };

  return (

    <Grid style={{ backgroundColor: 'green' }}>
      <Row style={{ alignItems: 'center' }} size={.9}>
        <Col style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: '#fff',
              fontSize: height / 26,
              fontWeight: 'bold'
            }}>
            {_direction(_degree(magnetometer))}
          </Text>
        </Col>
      </Row>

      <Row style={{ alignItems: 'center' }} size={.1}>
        <Col style={{ alignItems: 'center' }}>
          <View style={{ position: 'absolute', width: width, alignItems: 'center', top: 0 }}>
            <Image source={require('../assets/kaba_pointer.png')} style={{
              height: height / 15,
              resizeMode: 'contain'
            }} />
          </View>
        </Col>
      </Row>

      <Row style={{ alignItems: 'center' }} size={2}>
        <Text style={{
          color: '#fff',
          fontSize: height / 27,
          width: width,
          position: 'absolute',
          textAlign: 'center'
        }}>
          {_degree(magnetometer)}°
          </Text>

        <Col style={{ alignItems: 'center' }}>

          <Image source={require("../assets/compass_bg.png")} style={{
            height: width - 80,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
            transform: [{ rotate: 360 - magnetometer + 'deg' }]
          }} />

        </Col>
      </Row>
    </Grid>

  );
}