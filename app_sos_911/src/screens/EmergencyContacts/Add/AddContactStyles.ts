import { StyleSheet } from 'react-native';
import { normalize } from '../../../utils/dimensions';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#fff',
    width: normalize(320), // Establece un ancho fijo
    padding: normalize(20),
    borderRadius: normalize(15),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: normalize(400), // Establece una altura mínima
    maxHeight: 'auto', // Permite que el formulario se expanda si es necesario
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: normalize(10),
    marginBottom: normalize(10),
  },
  label: {
    fontSize: normalize(16),
    marginBottom: normalize(8),
    fontWeight: 'bold',
  },
  input: {
    height: normalize(40),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: normalize(5),
    paddingLeft: normalize(10),
    marginBottom: normalize(15),
    backgroundColor: '#fff',
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#00ACAC',
    paddingVertical: normalize(12),
    borderRadius: normalize(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(10),
  },
  saveButtonText: {
    color: '#fff',
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginLeft: normalize(8),
  },
  saveIcon: {
    marginRight: normalize(8),
  },
  imagePicker: {
    alignSelf: 'center',
    marginBottom: normalize(20),
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  contactImage: {
    width: '100%',
    height: '100%',
    borderRadius: normalize(50),
  },
  imagePlaceholder: {
    color: '#666',
    fontSize: normalize(12),
    textAlign: 'center',
  },
});
