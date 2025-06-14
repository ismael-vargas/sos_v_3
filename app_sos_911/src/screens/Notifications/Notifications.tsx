// Importamos las librerías y componentes necesarios
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Animated,
  Alert,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { XCircle, ArrowRight } from 'lucide-react-native'; // Íconos para las acciones
import CustomSidebar from '../../components/Sidebar/Sidebar'; // Sidebar personalizado
import Header from '../../components/Header/Header'; // Encabezado de la pantalla
import { styles } from './NotificationsStyles'; // Estilos de la pantalla
import { Notification, NotificationsProps } from './types'; // Tipos de datos
import { normalize } from '../../utils/dimensions'; // Función para normalizar tamaños en distintas pantallas
import MapView, { Marker } from 'react-native-maps'; // Agrega esto si tienes react-native-maps instalado

// Definimos el componente principal de la pantalla de notificaciones
const NotificationsScreen: React.FC<NotificationsProps> = ({ navigation }) => {
  // Estado que almacena las notificaciones
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Alerta : SOS',
      description: 'Familia: Me caí de la moto.',
      time: 'Hace 30 minutos',
      type: 'grupo',
      group: 'Comunidad San Jose',
    },
    {
      id: '2',
      title: 'Alerta : 911',
      description: 'Cercano: Pablo Vargas - Ayuda urgente.',
      time: 'Hace 40 minutos',
      type: 'clientes', // Cambiado aquí
    },
    {
      id: '3',
      title: 'Alerta : Innecesaria',
      description: 'Leo Perez: Apreté mal el botón.',
      time: 'Hace 1 hora',
      type: 'grupo',
      group: 'Comunidad San Jose',
    },
  ]);

  // Estado que controla la apertura del menú lateral
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // Función para confirmar la eliminación de una notificación
  const confirmDelete = (id: string) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Seguro que deseas eliminar esta notificación?",
      [
        { text: "Cancelar", style: "cancel" }, // Opción para cancelar
        { text: "Eliminar", onPress: () => handleDelete(id), style: "destructive" }, // Opción para eliminar
      ]
    );
  };

  // Función para eliminar una notificación del estado
  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  // Función que renderiza cada tarjeta de notificación
  const renderNotificationCard = (notification: Notification) => {
    const translateX = new Animated.Value(0); // Valor de animación para futuros efectos

    // Determina el estilo del título según el tipo de alerta
    let titleStyle = [styles.notificationTitle];
    if (notification.id === '1') titleStyle.push(styles.sosAlert); // Estilo para alerta SOS
    if (notification.id === '2') titleStyle.push(styles.alert911); // Estilo para alerta 911
    if (notification.id === '3') titleStyle.push(styles.unnecessaryAlert); // Estilo para alerta innecesaria

    // Determina el texto del encabezado según el tipo de notificación
    let headerText = '';
    if (notification.type === 'grupo') {
      headerText = notification.group || 'Comunidad';
    } else if (notification.type === 'clientes') {
      headerText = 'Cercano: Pablo Vargas';
    }

    return (
      <TouchableWithoutFeedback key={notification.id} onLongPress={() => confirmDelete(notification.id)}>
        <Animated.View style={[styles.notificationCard, { transform: [{ translateX }] }]}>
          
          {/* Encabezado de la notificación con nombre de la comunidad y tiempo transcurrido */}
          <View style={styles.notificationHeader}>
            <Text style={styles.communityText}>{headerText}</Text>
            <Text style={styles.timeText}>{notification.time}</Text>
          </View>

          {/* Contenido de la notificación con título, descripción y una imagen */}
          <View style={styles.notificationContent}>
            <View style={styles.notificationInfo}>
              <Text style={titleStyle}>{notification.title}</Text>
              <Text style={styles.notificationDescription}>{notification.description}</Text>
            </View>
            <Image source={require('../../assets/noti.jpg')} style={styles.profileImage} />
          </View>

          {/* Botones de acción en la notificación */}
          <View style={styles.notificationActions}>
            {/* Si la notificación NO es innecesaria, muestra el botón para ver la dirección */}
            {notification.id !== '3' && (
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => setShowMap(true)}
              >
                <Text style={styles.deleteText}>Ver ubicación</Text>
                <ArrowRight size={normalize(20)} color="#fff" />
              </TouchableOpacity>
            )}
            {/* Si la notificación es innecesaria, muestra el botón de alerta innecesaria */}
            {notification.id === '3' && (
              <View style={styles.innecesarioButton}>
                <XCircle size={normalize(20)} color="#fff" />
                <Text style={styles.innecesarioText}>Innecesario</Text>
              </View>
            )}
          </View>

        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };

  const DEMO_LOCATION = {
    latitude: -0.180653,
    longitude: -78.467834,
  };

  return (
    <ImageBackground source={require('../../assets/fondo.png')} style={styles.backgroundImage} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        
        {/* Encabezado de la pantalla con botón para abrir el menú lateral */}
        <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Notificaciones" />

        {/* Listado de notificaciones */}
        <ScrollView style={styles.content}>
          {notifications.length > 0 ? (
            notifications.map(renderNotificationCard) // Renderiza cada tarjeta de notificación
          ) : (
            <Text>No hay notificaciones</Text> // Mensaje si no hay notificaciones
          )}
        </ScrollView>

        {/* Menú lateral de navegación */}
        <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Modal para mostrar el mapa con la ubicación de la alerta */}
        <Modal visible={showMap} transparent animationType="slide" onRequestClose={() => setShowMap(false)}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '90%', height: 300, backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden' }}>
              <Text style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>Ubicación de la alerta</Text>
              {/* Si tienes MapView, muestra el mapa real */}
              <MapView
                style={{ flex: 1, width: '100%' }}
                initialRegion={{
                  latitude: DEMO_LOCATION.latitude,
                  longitude: DEMO_LOCATION.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker coordinate={DEMO_LOCATION} />
              </MapView>
              <Text style={{ textAlign: 'center', marginBottom: 10, color: '#00ACAC' }} onPress={() => setShowMap(false)}>
                Cerrar
              </Text>
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </ImageBackground>
  );
};

export default NotificationsScreen;
