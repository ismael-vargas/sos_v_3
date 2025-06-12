import { StyleSheet, Platform, StatusBar } from 'react-native';
import { normalize } from '../../utils/dimensions';

export const styles = StyleSheet.create({
   // Estilos para la imagen de fondo
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
   // Estilos para el contenedor principal
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
   // Estilos para el contenido principal de la pantalla
  content: {
    flex: 1,
    padding: normalize(15),
  },
    // Estilos para cada tarjeta de contacto
  contactCard: {
    backgroundColor: '#FFF',
    borderRadius: normalize(12),
    overflow: 'hidden',
    marginBottom: normalize(12),
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  // Estilos para la imagen del contacto
  contactImage: {
    width: '100%',
    height: normalize(150),
  },
   // Estilos para la superposición en la parte inferior de la tarjeta
  contactOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: normalize(10),
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
   // Estilos para el nombre del contacto
  contactName: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: normalize(5),
  },
   // Estilos para el botón de información
  infoButton: {
    backgroundColor: '#00ACAC',
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(15),
    borderRadius: normalize(5),
  },
   // Estilos para el texto dentro del botón de información
  infoButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: normalize(14),
  },
    // Estilos para el botón de eliminar contacto
  deleteButton: {
    position: 'absolute',
    top: normalize(10),
    right: normalize(10),
    backgroundColor: '#FF6B6B',
    padding: normalize(8), // Ajustado para ser más grande y clickeable
    borderRadius: normalize(20),
    zIndex: 10, // Asegura que el botón esté sobre otros elementos
  },
   // Estilos para el botón de agregar contacto (+)
  addButton: {
    position: 'absolute',
    right: normalize(20),
    bottom: normalize(20),
    width: normalize(56),
    height: normalize(56),
    borderRadius: normalize(28),
    backgroundColor: '#00ACAC', // Color de Figma
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
