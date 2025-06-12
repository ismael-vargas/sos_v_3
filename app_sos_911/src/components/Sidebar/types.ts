import { ReactNode } from 'react';

// Definición de las rutas disponibles en la navegación
export type RootStackParamList = {
  Home: undefined;
  EmergencyContacts: undefined;
  Profile: undefined;
  Groups: undefined;
  Login: undefined;
  Location: undefined; 
  Information: undefined;
  Notifications:undefined;
  AlertHistory: undefined; // Added AlertHistory screen
};

// Props para el componente Sidebar
export interface CustomSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

// Estructura para los items del menú
export interface MenuItem {
  title: string;
  screen: keyof RootStackParamList;
  icon?: string; // Podemos agregar iconos más adelante
}