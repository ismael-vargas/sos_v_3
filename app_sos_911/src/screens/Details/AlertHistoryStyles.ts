import { StyleSheet, Platform, StatusBar } from 'react-native';
import { normalize } from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    padding: normalize(16),
    paddingBottom: normalize(24),
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    borderRadius: normalize(16),
    marginBottom: normalize(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 6,
    overflow: 'hidden',
    minHeight: normalize(110),
  },
  // Barra lateral de color
  borderSOS: {
    borderLeftWidth: normalize(7),
    borderLeftColor: '#FF9E5D',
  },
  border911: {
    borderLeftWidth: normalize(7),
    borderLeftColor: '#FF4D4D',
  },
  // Ícono grande a la izquierda
  iconContainer: {
    width: normalize(60),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  // Contenido principal de la tarjeta
  cardContent: {
    flex: 1,
    padding: normalize(16),
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: normalize(8),
  },
  alertTitleBlock: {
    flexDirection: 'column',
    gap: normalize(2),
  },
  alertType: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: '#222',
  },
  alertSubtitle: {
    fontSize: normalize(13),
    color: '#888',
    fontWeight: '500',
  },
  // Badge de estado
  statusBadge: {
    borderRadius: normalize(20),
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(16),
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: normalize(13),
    overflow: 'hidden',
  },
  status_resuelto: {
    backgroundColor: '#00ACAC',
    color: '#fff',
  },
  status_activo: {
    backgroundColor: '#D9534F',
    color: '#fff',
  },
  // Línea divisoria
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: normalize(10),
  },
  // Campos de fecha y ubicación
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: normalize(8),
  },
  infoIcon: {
    marginRight: normalize(10),
    marginTop: normalize(2),
  },
  infoBlock: {
    flex: 1,
  },
  infoLabel: {
    fontSize: normalize(11),
    color: '#888',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  infoValue: {
    fontSize: normalize(15),
    color: '#333',
    fontWeight: '500',
    marginTop: normalize(1),
  },
  noDataText: {
    fontSize: normalize(16),
    color: '#AAA',
    textAlign: 'center',
    marginTop: normalize(20),
    fontStyle: 'italic',
  },
});

export default styles;
