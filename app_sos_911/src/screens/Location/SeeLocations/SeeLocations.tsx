import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Modal, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './SeeLocationsStyles';
import Header from '../../../components/Header/Header';

interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const SeeLocations = ({ closeModal }: { closeModal: () => void }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const savedLocations: Location[] = [
    { id: '1', name: 'San Juan de Calderón', latitude: -0.15, longitude: -78.48 },
    { id: '2', name: 'La Mariscal', latitude: -0.19, longitude: -78.45 },
    { id: '3', name: 'Quito Centro', latitude: -0.22, longitude: -78.51 },
    { id: '4', name: 'El Ejido', latitude: -0.21, longitude: -78.49 },
  ];

  const [visibleLocations, setVisibleLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const loadMoreLocations = () => {
    if (loadingMore || visibleLocations.length >= savedLocations.length) return;
    setLoadingMore(true);
    
    setTimeout(() => {
      const nextLocations = savedLocations.slice(visibleLocations.length, visibleLocations.length + 2);
      setVisibleLocations((prev) => [...prev, ...nextLocations]);
      setLoadingMore(false);
    }, 1000);
  };

  useEffect(() => {
    setVisibleLocations(savedLocations.slice(0, 2));
    setLoading(false);
  }, []);

  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <ImageBackground
        source={require('../../../assets/fondo.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.modalContainer}>
          <Header 
            onMenuPress={() => setSidebarOpen(true)}
            showBackButton
            onBackPress={closeModal}
            customTitle="Mis Ubicaciones"
          />

          {loading ? (
            <ActivityIndicator size="large" color="#00ACAC" />
          ) : (
            <>
             <MapView
                style={styles.modalMap}
                initialRegion={{
                  latitude: -0.1807, // Coordenadas de Quito
                  longitude: -78.4678,
                  latitudeDelta: 0.05, // Zoom del mapa
                  longitudeDelta: 0.05, // Zoom del mapa
                }}
              >
                {visibleLocations.map((location) => (
                  <Marker
                    key={location.id}
                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                    title={location.name}
                    pinColor="red"
                  />
                ))}
              </MapView>

              <View style={styles.locationsList}>
                <Text style={styles.locationsTitle}>Mis Ubicaciones:</Text>

                <FlatList
                  data={visibleLocations}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View style={styles.locationItem}>
                      <MaterialIcons name="location-on" style={styles.locationItemIcon} />
                      <Text style={styles.locationText}>{item.name}</Text>
                    </View>
                  )}
                  onEndReached={loadMoreLocations}
                  onEndReachedThreshold={0.1}
                  ListFooterComponent={loadingMore ? <ActivityIndicator size="small" color="#00ACAC" /> : null}
                />
              </View>
            </>
          )}
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default SeeLocations;