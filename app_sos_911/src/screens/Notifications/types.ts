export interface Notification {
    id: string;
    title: string;
    description: string;
    time: string;
  }
  
  export interface NotificationsProps {
    navigation: any; // Puedes mejorar esto con `NavigationProp` de React Navigation
  }
  