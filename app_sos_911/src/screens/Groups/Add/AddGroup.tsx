import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  FlatList,
  SafeAreaView,
  Alert,
  ImageBackground,
  ImageSourcePropType
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './AddGroupStyles';
import Header from '../../../components/Header/Header';
import CustomSidebar from '../../../components/Sidebar/Sidebar';

// Actualiza esta interfaz en tu archivo de tipos
interface GroupMember {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

interface Group {
  id: string;
  name: string;
  description: string;
  members: GroupMember[];
  image?: ImageSourcePropType;
}

interface AddGroupProps {
  onCreateGroup: (group: Group) => void;
  onCancel: () => void;
}

const AddGroup: React.FC<AddGroupProps> = ({ onCreateGroup, onCancel }) => {
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDesc, setNewGroupDesc] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<GroupMember[]>([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Mock data para contactos con imágenes locales
  const availableContacts: GroupMember[] = [
    { 
      id: '1', 
      name: 'Juan Pérez', 
      image: require('../../../assets/erick.jpg')
    },
    { 
      id: '2', 
      name: 'María García', 
      image: require('../../../assets/erick.jpg')
    },
    { 
      id: '3', 
      name: 'Carlos López', 
      image: require('../../../assets/erick.jpg')
    }
  ];

  const createNewGroup = () => {
    if (!newGroupName.trim() || selectedMembers.length === 0) {
      Alert.alert('Error', 'Por favor ingresa un nombre de grupo y selecciona al menos un miembro');
      return;
    }

    const newGroup: Group = {
      id: Date.now().toString(),
      name: newGroupName,
      description: newGroupDesc,
      members: selectedMembers,
    };

    onCreateGroup(newGroup);
  };

  const toggleMemberSelection = (member: GroupMember) => {
    if (selectedMembers.find(m => m.id === member.id)) {
      setSelectedMembers(selectedMembers.filter(m => m.id !== member.id));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const renderContactImage = (image: ImageSourcePropType) => {
    return (
      <View style={styles.contactImageContainer}>
        <Image 
          source={image}
          style={styles.contactImage}
          defaultSource={require('../../../assets/erick.jpg')}
        />
      </View>
    );
  };

  return (
    <ImageBackground 
      source={require('../../../assets/fondo.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Header 
          onMenuPress={() => setSidebarOpen(true)}
          customTitle="Nuevo Grupo"
          showBackButton
          onBackPress={onCancel}
        />

        <View style={styles.createGroupForm}>
          <TextInput
            style={styles.input}
            placeholder="Nombre del Grupo"
            value={newGroupName}
            onChangeText={setNewGroupName}
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="Descripción (opcional)"
            value={newGroupDesc}
            onChangeText={setNewGroupDesc}
            placeholderTextColor="#666"
            multiline
          />

          <Text style={styles.sectionTitle}>Agregar Participantes</Text>
          <FlatList
            data={availableContacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.contactItem}
                onPress={() => toggleMemberSelection(item)}
                activeOpacity={0.7}
              >
                {renderContactImage(item.image)}
                <Text style={styles.contactName}>{item.name}</Text>
                {selectedMembers.find(m => m.id === item.id) && (
                  <Ionicons 
                    name="checkmark-circle" 
                    size={24} 
                    color="#007AFF" 
                    style={styles.selectedIcon}
                  />
                )}
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />

          <TouchableOpacity 
            style={[
              styles.createButton,
              (!newGroupName.trim() || selectedMembers.length === 0) && 
              styles.createButtonDisabled
            ]}
            onPress={createNewGroup}
            disabled={!newGroupName.trim() || selectedMembers.length === 0}
            activeOpacity={0.7}
          >
            <Text style={styles.createButtonText}>Crear Grupo</Text>
          </TouchableOpacity>
        </View>

        <CustomSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AddGroup;