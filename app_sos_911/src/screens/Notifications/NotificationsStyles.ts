import { StyleSheet, Platform, StatusBar } from 'react-native';
import { normalize } from '../../utils/dimensions'; // Función para normalizar tamaños en distintas pantallas

export const styles = StyleSheet.create({
  // Imagen de fondo que ocupa toda la pantalla
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  // Contenedor principal de la pantalla
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Fondo transparente para respetar la imagen de fondo
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Ajuste del padding en Android
  },

  // Contenido de la pantalla, incluyendo las notificaciones
  content: {
    flex: 1,
    padding: normalize(15), // Espaciado interno ajustable
  },

  // Estilo de la tarjeta de notificación
  notificationCard: {
    backgroundColor: '#ffffff', // Fondo blanco para destacar la notificación
    padding: normalize(20),
    borderRadius: normalize(15), // Bordes redondeados
    marginBottom: normalize(15), // Espacio entre tarjetas
    shadowColor: '#000', // Sombras para dar efecto de elevación
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Sombra en Android
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)', // Borde sutil
  },

  // Encabezado de la notificación (nombre de la comunidad y hora)
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribuye los elementos a los extremos
    marginBottom: normalize(10),
  },

  // Texto con el nombre de la comunidad
  communityText: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#2d2d2d',
    textAlign: 'left', // Alineación ajustada a la izquierda
  },

  // Texto con la hora de la notificación
  timeText: {
    fontSize: normalize(14),
    color: '#9b9b9b', // Color gris para menor jerarquía visual
    textAlign: 'right',
  },

  // Contenedor del contenido de la notificación (título, descripción e imagen)
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10),
  },

  // Contenedor del texto de la notificación
  notificationInfo: {
    flex: 1, // Ocupa el espacio restante
    marginLeft: normalize(15), // Espacio entre el texto y la imagen
  },

  // Título de la notificación
  notificationTitle: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#333',
  },

  // Descripción de la notificación
  notificationDescription: {
    fontSize: normalize(14),
    color: '#666',
    marginTop: normalize(4),
  },

  // Imagen de perfil o ícono dentro de la notificación
  profileImage: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25), // Imagen circular
    borderWidth: 2,
    borderColor: '#ffffff', // Borde blanco para resaltar
  },

  // Contenedor de las acciones dentro de la notificación
  notificationActions: {
    flexDirection: 'row',
    justifyContent: 'center', // Alineación centrada
    alignItems: 'center',
    marginTop: normalize(10),
    width: '100%',
  },

  // Botón para ver la dirección del usuario
  deleteButton: {
    backgroundColor: '#008080', // Color verde esmeralda más oscuro
    padding: normalize(10),
    borderRadius: normalize(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },

  // Botón para marcar la alerta como innecesaria
  innecesarioButton: {
    backgroundColor: '#FF7F7F', // Color rojo claro
    padding: normalize(10),
    borderRadius: normalize(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },

  // Texto dentro del botón de "Ver dirección de usuario"
  deleteText: {
    fontSize: normalize(14),
    color: '#fff',
    fontWeight: 'bold',
    marginRight: normalize(5), // Espaciado entre el texto y el ícono
  },

  // Estilos para notificaciones de tipo SOS
  sosAlert: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#FF9E5D', // Color naranja
  },

  // Estilos para notificaciones de tipo 911
  alert911: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#FF4D4D', // Color rojo fuerte
  },

  // Estilos para notificaciones innecesarias
  unnecessaryAlert: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#2F7E70', // Verde oscuro
  },

  // Texto dentro del botón de "Innecesario"
  innecesarioText: {
    fontSize: normalize(14),
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: normalize(10), // Espaciado entre el ícono y el texto
  },
});
