import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './LocationStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import SeeLocations from './SeeLocations/SeeLocations';
import Header from '../../components/Header/Header';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import { LinearGradient } from 'expo-linear-gradient';

type RootStackParamList = {
  LocationScreen: undefined;
  OtherScreen: undefined;
};

type LocationScreenNavigationProp = NavigationProp<RootStackParamList>;

const LocationScreen = () => {
  const navigation = useNavigation<LocationScreenNavigationProp>();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [visibleLocations, setVisibleLocations] = useState<Location[]>([]);
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef<MapView | null>(null);
  
  const [currentLocation, setCurrentLocation] = useState<Region>({
    latitude: -0.180653,
    longitude: -78.467834,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        console.log('Solicitando permisos de ubicación...');
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log('Estado de los permisos:', status);

        if (status !== 'granted') {
          console.log('Permiso denegado');
          alert('Permiso de ubicación denegado.');
          return;
        }

        console.log('Obteniendo ubicación actual...');
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });

        console.log('Ubicación obtenida:', location);
        console.log('Latitud:', location.coords.latitude);
        console.log('Longitud:', location.coords.longitude);

        const newRegion: Region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        };

        setCurrentLocation(newRegion);
        
        if (mapRef.current && mapReady) {
          mapRef.current.animateToRegion(newRegion, 1000);
        }

        console.log('Estado actualizado con nueva ubicación');
      } catch (error) {
        console.error('Error al obtener la ubicación:', error);
        alert('Error al obtener la ubicación. Por favor, inténtalo de nuevo.');
      }
    })();
  }, [mapReady]);

  const handleShowCurrentLocation = async () => {
    try {
      console.log('Actualizando ubicación actual...');
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      
      console.log('Nueva ubicación obtenida:', location);
      console.log('Nueva Latitud:', location.coords.latitude);
      console.log('Nueva Longitud:', location.coords.longitude);

      const newRegion: Region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

      setCurrentLocation(newRegion);
      
      if (mapRef.current && mapReady) {
        mapRef.current.animateToRegion(newRegion, 1000);
      }

      console.log('Estado actualizado con la ubicación más reciente');
    } catch (error) {
      console.error('Error al actualizar la ubicación:', error);
      alert('Error al actualizar la ubicación. Por favor, inténtalo de nuevo.');
    }
  };

  const handleShowSavedLocations = () => {
    setModalVisible(true);
  };

  return (
   <LinearGradient
     colors={['#1d7a7a', '#0f172a']}
     style={styles.backgroundImage}
     start={{ x: 0, y: 1 }}
     end={{ x: 1, y: 0 }}
   >
        
      <SafeAreaView style={styles.container}>
        <Header
          onMenuPress={() => setSidebarOpen(true)}
          customTitle="Ubicación"
        />

        <View style={styles.content}>
          <View style={styles.mapContainer}>
            <MapView 
              provider={PROVIDER_GOOGLE}
              ref={mapRef}
              style={styles.map}
              initialRegion={currentLocation}
              onMapReady={() => {
                console.log('Mapa listo');
                setMapReady(true);
              }}
              showsUserLocation={true}
              showsMyLocationButton={false}
              followsUserLocation={true}
            >
              <Marker 
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude
                }}
                title="Mi ubicación"
                description="Estás aquí"
              />
            </MapView>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleShowCurrentLocation}
            >
              <Ionicons name="locate-outline" size={20} color="white" />
              <Text style={styles.buttonText}>Ver mi ubicación actual</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.buttonSecondary} 
              onPress={handleShowSavedLocations}
            >
              <Ionicons name="location-outline" size={20} color="white" />
              <Text style={styles.buttonText}>Ver mis ubicaciones</Text>
            </TouchableOpacity>
          </View>
        </View>

        {modalVisible && <SeeLocations closeModal={() => setModalVisible(false)} />}

        <CustomSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </SafeAreaView>
      </LinearGradient>
  );
};

export default LocationScreen;