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
  StyleSheet,
  TextInput
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
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
      name: 'Carapungo',
      description: 'Unidos para siempre',
      members: [
        { id: '1', name: 'Juan Pérez', image: require('../../assets/erick.jpg') },
        { id: '2', name: 'María García', image: require('../../assets/erick.jpg') },
        { id: '3', name: 'Carlos López', image: require('../../assets/erick.jpg') }
      ]
    },
    {
      id: '2',
      name: 'Iñaquito',
      description: 'Reporte del barrio',
      members: [
        { id: '2', name: 'María García', image: require('../../assets/erick.jpg') },
        { id: '3', name: 'Carlos López', image: require('../../assets/erick.jpg') }
      ]
    }
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [editingGroupId, setEditingGroupId] = useState<string | null>(null);
  const [editedGroupName, setEditedGroupName] = useState('');

  const handleCreateGroup = (newGroup: Group) => {
    setGroups([...groups, newGroup]);
    setIsCreating(false);
  };

  const handleDeleteGroup = (groupId: string) => {
    setGroups(groups.filter(g => g.id !== groupId));
  };

  const renderGroup = ({ item }: { item: Group }) => (
    <TouchableOpacity
      style={styles.groupItem}
      activeOpacity={0.8}
      onPress={() => {
        if (editingGroupId !== item.id) {
          navigation.navigate('GroupChat', { group: item });
        }
      }}
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
        {editingGroupId === item.id ? (
          <TextInput
            style={styles.groupNameInput}
            value={editedGroupName}
            onChangeText={setEditedGroupName}
            onBlur={() => {
              setGroups(groups.map(g => g.id === item.id ? { ...g, name: editedGroupName } : g));
              setEditingGroupId(null);
            }}
            autoFocus
          />
        ) : (
          <Text style={styles.groupName}>{item.name}</Text>
        )}
        {/* Descripción del grupo */}
        <Text style={styles.groupDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.groupMembers}>
          {item.members.length} {item.members.length === 1 ? 'miembro' : 'miembros'}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.editIcon}
        onPress={(e) => {
          e.stopPropagation();
          setEditingGroupId(item.id);
          setEditedGroupName(item.name);
        }}
      >
        <Ionicons name="pencil" size={22} color="#00ACAC" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.editIcon}
        onPress={(e) => {
          e.stopPropagation();
          handleDeleteGroup(item.id);
        }}
      >
        <MaterialIcons name="delete" size={22} color="#FF4D4F" />
      </TouchableOpacity>
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