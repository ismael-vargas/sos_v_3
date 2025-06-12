// types.ts
export interface HeaderProps {
  onMenuPress: () => void;
  customTitle?: string; // Opcional: permite sobreescribir el título automático
  showBackButton?: boolean;
  onBackPress?: () => void;
}