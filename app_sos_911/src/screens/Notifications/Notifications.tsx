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
} from 'react-native';
import { XCircle, ArrowRight } from 'lucide-react-native'; // Íconos para las acciones
import CustomSidebar from '../../components/Sidebar/Sidebar'; // Sidebar personalizado
import Header from '../../components/Header/Header'; // Encabezado de la pantalla
import { styles } from './NotificationsStyles'; // Estilos de la pantalla
import { Notification, NotificationsProps } from './types'; // Tipos de datos
import { normalize } from '../../utils/dimensions'; // Función para normalizar tamaños en distintas pantallas

// Definimos el componente principal de la pantalla de notificaciones
const NotificationsScreen: React.FC<NotificationsProps> = ({ navigation }) => {
  // Estado que almacena las notificaciones
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Alerta : SOS',
      description: 'Pablo Vera: Me caí de la moto.',
      time: 'Hace 30 minutos',
    },
    {
      id: '2',
      title: 'Alerta : 911',
      description: 'Axel Loja: Ayuda me matan.',
      time: 'Hace 40 minutos',
    },
    {
      id: '3',
      title: 'Alerta : Innecesaria',
      description: 'Leo Perez: Apreté mal el botón.',
      time: 'Hace 1 hora',
    },
  ]);

  // Estado que controla la apertura del menú lateral
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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

    return (
      <TouchableWithoutFeedback key={notification.id} onLongPress={() => confirmDelete(notification.id)}>
        <Animated.View style={[styles.notificationCard, { transform: [{ translateX }] }]}>
          
          {/* Encabezado de la notificación con nombre de la comunidad y tiempo transcurrido */}
          <View style={styles.notificationHeader}>
            <Text style={styles.communityText}>Comunidad San Jose</Text>
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
              <View style={styles.deleteButton}>
                <Text style={styles.deleteText}>Ver dirección de usuario</Text>
                <ArrowRight size={normalize(20)} color="#fff" />
              </View>
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

      </SafeAreaView>
    </ImageBackground>
  );
};

export default NotificationsScreen;
