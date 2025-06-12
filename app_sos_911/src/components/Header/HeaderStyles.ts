// HeaderStyles.ts
import { StyleSheet } from 'react-native';
import { normalize } from '../../utils/dimensions';

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(16),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  menuButton: {
    padding: normalize(8),
    borderRadius: normalize(8),
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  headerTitle: {
    fontSize: normalize(20),
    fontWeight: '500',
    marginLeft: normalize(16),
    color: '#FFFFFF',
    letterSpacing: 0.5,
    flex: 1,
  },
});