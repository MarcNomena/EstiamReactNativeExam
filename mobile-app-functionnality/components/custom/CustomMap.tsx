import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface Localisation {
    latitude: number,
    longitude: number,
    title:string,
    description:string
}

const MapComponent =() => {

    const [locations, setLocations] = useState<Localisation[]>([
        { latitude: 48.875562903567086, longitude: 2.410769240201294,title:"ESTIAM Paris",description:"Ecole d'informatique" },	    
        { latitude: 45.73947710146745, longitude: 4.8264948499581095,title:"ESTIAM Lyon",description:"Ecole d'informatique" },	    
      ]);

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
        {locations.map((location, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
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