import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Asegura que el fondo cubra toda la pantalla
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro con transparencia para que resalte el contenido
    justifyContent: 'flex-start',  // Cambiado a 'flex-start' para alinear el Header arriba
    alignItems: 'center',
    paddingTop: 5, // Añadido un pequeño margen superior
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  
  modalMap: {
    width: '100%',
    height: '42%',
    borderRadius: 10000,
    overflow: 'hidden',
    marginBottom: 15,
  },
  locationsList: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Hacerlo más transparente
    width: '100%',
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Sombra para Android
  }
  ,
  locationsTitle: {
    fontSize: 13, // Tamaño de letra 13 para "Mis Ubicaciones"
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10, // Espacio entre el título y la lista
  },
  locationItem: {
    paddingVertical: 12, // Ajustado el padding vertical para reducir el tamaño
    paddingHorizontal: 10,
    flexDirection: 'row', // Alineación en fila para el ícono y texto
    alignItems: 'center', // Centra el contenido verticalmente
    borderBottomWidth: 1, // Borde horizontal entre cada fila
    borderBottomColor: '#E0F7FA', // Borde celeste suave
  },
  locationText: {
    fontSize: 13, // Reducido el tamaño de la fuente para hacerlo más compacto
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10, // Separación entre el ícono y el texto
    flex: 1, // Hace que el texto ocupe todo el espacio disponible
  },
  modalButton: {
    backgroundColor: '#00ACAC',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationItemIcon: {
    fontSize: 20, // Tamaño del ícono
    color: '#4CAF50', // Verde medio (puedes cambiarlo según tu preferencia)
  },
});
