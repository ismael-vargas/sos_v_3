import { StyleSheet, Platform, StatusBar } from 'react-native';
import { normalize } from '../../../utils/dimensions';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  createGroupForm: {
    flex: 1,
    padding: normalize(15),
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: normalize(10),
    padding: normalize(12),
    marginBottom: normalize(15),
    fontSize: normalize(16),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  sectionTitle: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    marginBottom: normalize(15),
    color: '#fff',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(12),
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: normalize(10),
    marginBottom: normalize(8),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  contactImageContainer: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(20),
    overflow: 'hidden',
    marginRight: normalize(12),
    backgroundColor: '#E1E1E1',
  },
  contactImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contactName: {
    flex: 1,
    fontSize: normalize(16),
    color: '#333',
  },
  selectedIcon: {
    marginLeft: normalize(12),
  },
  createButton: {
    backgroundColor: '#FF7E7B',
    padding: normalize(16),
    borderRadius: normalize(10),
    alignItems: 'center',
    marginTop: normalize(16),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  createButtonDisabled: {
    backgroundColor: '#A8A8A8',
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
});