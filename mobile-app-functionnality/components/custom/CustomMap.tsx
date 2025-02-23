import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LocalisationArray } from '@/interface/MapInteractor';


const MapComponent =({localisation}:LocalisationArray) => {
     return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.mapContainer}>
        <MapView style={styles.map}
        initialRegion={{
            latitude: 46.603354, 
            longitude: 1.888334,
            latitudeDelta: 10.0, 
            longitudeDelta: 10.0,
        }}
        
        >
        {localisation.map((location, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: location.coordonne.latitude, longitude: location.coordonne.longitude }}
              title={location.title}
              description={location.description}
            />
          ))}
        </MapView>
      </View>
    </ScrollView>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    mapContainer: {
      width: '100%',
      alignItems: 'center',
    },
    map: {
      width: '80%',
      height: 400, // Adjust the height as needed
    },
  });