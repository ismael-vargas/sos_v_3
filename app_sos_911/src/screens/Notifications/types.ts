export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'grupo' | 'clientes';
  group?: string;
  alertType: 'sos' | '911' | 'unnecessary';
}

export interface NotificationsProps {
  navigation: any; // Puedes mejorar esto con `NavigationProp` de React Navigation
}
