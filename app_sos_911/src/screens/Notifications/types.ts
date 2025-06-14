export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type?: 'grupo' | 'clientes'; // Cambia 'persona' por 'clientes'
  group?: string;
}

export interface NotificationsProps {
  navigation: any; // Puedes mejorar esto con `NavigationProp` de React Navigation
}
