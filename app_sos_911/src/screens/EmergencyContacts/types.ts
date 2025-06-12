import { NavigationProp } from '@react-navigation/native';

export interface Contact {
  id: string;
  name: string;
  phone: string;
  relation: string;
  image: any; // Para incluir fotos en las tarjetas
}

export type RootStackParamList = {
  EmergencyContacts: undefined;
  ContactDetails: { contact: Contact };
  AddContact: { addContact: (contact: Contact) => void };  // Agrega el tipo para addContact
  EditContact: { contactId: string };
};

export interface EmergencyContactsProps {
  navigation: NavigationProp<RootStackParamList, 'EmergencyContacts'>;
}
