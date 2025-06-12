import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  FlatList,
  SafeAreaView,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/Header/Header';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import AddGroup from './Add/AddGroup';
import { GroupsScreenProps } from '../../navigation/Navigator';
import styles from './GroupsStyles';


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

export const GroupsScreen: React.FC<GroupsScreenProps> = ({ navigation }) => {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: '1',
      name: 'Familia',
      description: 'Grupo familiar para compartir momentos especiales',
      members: [
        { id: '1', name: 'Juan Pérez', image: require('../../assets/erick.jpg') },
        { id: '2', name: 'María García', image: require('../../assets/erick.jpg') },
        { id: '3', name: 'Carlos López', image: require('../../assets/erick.jpg') }
      ]
    },
    {
      id: '2',
      name: 'Amigos del Trabajo',
      description: 'Grupo para coordinar actividades con compañeros',
      members: [
        { id: '2', name: 'María García', image: require('../../assets/erick.jpg') },
        { id: '3', name: 'Carlos López', image: require('../../assets/erick.jpg') }
      ]
    }
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleCreateGroup = (newGroup: Group) => {
    setGroups([...groups, newGroup]);
    setIsCreating(false);
  };

  const renderGroup = ({ item }: { item: Group }) => (
    <TouchableOpacity 
      style={styles.groupItem}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('GroupChat', { group: item })}
    >
      <View style={styles.groupImageContainer}>
        {item.image ? (
          <Image 
            source={item.image} 
            style={styles.groupImage}
            defaultSource={require('../../assets/erick.jpg')}
          />
        ) : (
          <View style={styles.groupImagePlaceholder}>
            <Text style={styles.groupImagePlaceholderText}>
              {item.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.groupInfo}>
        <Text style={styles.groupName}>{item.name}</Text>
        <Text style={styles.groupMembers}>
          {item.members.length} {item.members.length === 1 ? 'miembro' : 'miembros'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (isCreating) {
    return (
      <AddGroup 
        onCreateGroup={handleCreateGroup}
        onCancel={() => setIsCreating(false)}
      />
    );
  }

  return (
    <ImageBackground 
      source={require('../../assets/fondo.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Header 
          onMenuPress={() => setSidebarOpen(true)}
          customTitle="Grupos" 
        />

        {groups.length > 0 ? (
          <FlatList
            data={groups}
            keyExtractor={(item) => item.id}
            renderItem={renderGroup}
            style={styles.content}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No hay grupos todavía</Text>
            <Text style={styles.emptyStateSubtext}>
              Crea un grupo para comenzar a chatear con varias personas a la vez
            </Text>
          </View>
        )}

        <TouchableOpacity 
          style={styles.fab}
          onPress={() => setIsCreating(true)}
          activeOpacity={0.7}
        >
          <Ionicons name="add" size={32} color="#FFFFFFFF" />
        </TouchableOpacity>

        <CustomSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GroupsScreen;