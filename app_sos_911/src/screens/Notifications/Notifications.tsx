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
import { ShieldAlert, Siren, Bell, XCircle, MapPin } from 'lucide-react-native'; // Íconos para las acciones
import CustomSidebar from '../../components/Sidebar/Sidebar'; // Sidebar personalizado
import Header from '../../components/Header/Header'; // Encabezado de la pantalla
import { styles } from './NotificationsStyles'; // Estilos de la pantalla
import { Notification, NotificationsProps } from './types'; // Tipos de datos
import { normalize } from '../../utils/dimensions'; // Función para normalizar tamaños en distintas pantallas
import MapView, { Marker } from 'react-native-maps'; // Agrega esto si tienes react-native-maps instalado
import { LinearGradient } from 'expo-linear-gradient';

const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'Alerta : SOS',
    description: 'Familia: Me caí de la moto.',
    time: 'Hace 30 minutos',
    type: 'grupo',
    group: 'Comunidad San Jose',
    alertType: 'sos',
  },
  {
    id: '2',
    title: 'Alerta : 911',
    description: 'Cercano: Pablo Vargas - Ayuda urgente.',
    time: 'Hace 40 minutos',
    type: 'clientes',
    alertType: '911',
  },
  {
    id: '3',
    title: 'Alerta : Innecesaria',
    description: 'Leo Perez: Apreté mal el botón.',
    time: 'Hace 1 hora',
    type: 'grupo',
    group: 'Comunidad San Jose',
    alertType: 'unnecessary',
  },
];

const alertConfig = {
  sos: {
    icon: <Siren size={normalize(24)} color="#fff" />,
    color: styles.sosBar,
    textColor: styles.sosAlert,
    buttonColor: styles.sosButton,
  },
  '911': {
    icon: <ShieldAlert size={normalize(24)} color="#fff" />,
    color: styles.alert911Bar,
    textColor: styles.alert911,
    buttonColor: styles.alert911Button,
  },
  unnecessary: {
    icon: <Bell size={normalize(24)} color="#fff" />,
    color: styles.unnecessaryBar,
    textColor: styles.unnecessaryAlert,
    buttonColor: styles.unnecessaryButton,
  },
};

// Definimos el componente principal de la pantalla de notificaciones
const NotificationsScreen: React.FC<NotificationsProps> = ({ navigation }) => {
  // Estado que almacena las notificaciones
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  // Estado que controla la apertura del menú lateral
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // Función para confirmar la eliminación de una notificación
  const confirmDelete = (id: string) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Seguro que deseas eliminar esta notificación?',
      [
        { text: 'Cancelar', style: 'cancel' }, // Opción para cancelar
        { text: 'Eliminar', onPress: () => handleDelete(id), style: 'destructive' }, // Opción para eliminar
      ]
    );
  };

  // Función para eliminar una notificación del estado
  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  // Función que renderiza cada tarjeta de notificación
  const renderNotificationCard = (notification: Notification) => {
    const config = alertConfig[notification.alertType];
    const headerText = notification.type === 'grupo' ? notification.group || 'Comunidad' : 'Cercano: Pablo Vargas';
    return (
      <TouchableWithoutFeedback key={notification.id} onLongPress={() => confirmDelete(notification.id)}>
        <View style={styles.cardContainer}>
          {/* Barra lateral de color e ícono */}
          <View style={[styles.sideBar, config.color]}>
            {config.icon}
          </View>
          {/* Cuerpo de la tarjeta */}
          <View style={styles.cardContent}>
            <View style={styles.notificationHeader}>
              <Text style={styles.communityText}>{headerText}</Text>
              <Text style={styles.timeText}>{notification.time}</Text>
            </View>
            <View style={styles.notificationContentWeb}>
              <View style={styles.notificationInfo}>
                <Text style={[styles.notificationTitle, config.textColor]}>{notification.title}</Text>
                <Text style={styles.notificationDescription}>{notification.description}</Text>
              </View>
              <Image
                source={require('../../assets/noti.jpg')}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.notificationActions}>
              {notification.alertType !== 'unnecessary' ? (
                <TouchableOpacity
                  style={[styles.actionButton, config.buttonColor]}
                  onPress={() => setShowMap(true)}
                >
                  <MapPin size={normalize(18)} color="#fff" style={{ marginRight: normalize(6) }} />
                  <Text style={styles.actionButtonText}>Ver ubicación</Text>
                </TouchableOpacity>
              ) : (
                <View style={[styles.actionButton, styles.innecesarioButton]}>
                  <XCircle size={normalize(18)} color="#fff" style={{ marginRight: normalize(6) }} />
                  <Text style={styles.actionButtonText}>Alerta Innecesaria</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const DEMO_LOCATION = {
    latitude: -0.180653,
    longitude: -78.467834,
  };

  return (
   <LinearGradient
  colors={['#1d7a7a', '#0f172a']}
  style={styles.backgroundImage}
  start={{ x: 0, y: 1 }}
  end={{ x: 1, y: 0 }}
>
      <SafeAreaView style={styles.container}>
        
        {/* Encabezado de la pantalla con botón para abrir el menú lateral */}
        <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Notificaciones" />

        {/* Listado de notificaciones */}
        <ScrollView style={styles.content}>
          {notifications.length > 0 ? (
            notifications.map(renderNotificationCard) // Renderiza cada tarjeta de notificación
          ) : (
            <Text style={{ textAlign: 'center', color: '#888', marginTop: 40 }}>No hay notificaciones</Text> // Mensaje si no hay notificaciones
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
     </LinearGradient>
  );
};

export default NotificationsScreen;
