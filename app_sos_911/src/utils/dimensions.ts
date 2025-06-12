import { Dimensions, Platform } from 'react-native';

// Obtenemos el ancho de la pantalla una sola vez ya que no cambiará en móvil
const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Usamos 375 como base que es el ancho de un iPhone estándar
const scale = SCREEN_WIDTH / 375;

/**
 * Normaliza un tamaño dado según las dimensiones del dispositivo
 * @param size - Tamaño base a normalizar
 * @returns Tamaño normalizado según la pantalla del dispositivo
 */
export const normalize = (size: number): number => {
  const newSize = size * scale;
  // En iOS los números decimales funcionan bien, en Android es mejor redondearlos
  return Platform.OS === 'android' ? Math.round(newSize) : newSize;
};

// Exportamos el ancho de pantalla por si se necesita en algún cálculo
export const screenWidth = SCREEN_WIDTH;