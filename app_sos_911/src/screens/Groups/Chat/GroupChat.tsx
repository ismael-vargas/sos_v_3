import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../../components/Header/Header';
import styles from './GroupChatStyles';
import { GroupChatScreenProps } from '../../../navigation/Navigator';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

const GroupChat: React.FC<GroupChatScreenProps> = ({ route, navigation }) => {
  const { group } = route.params;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola a todos!',
      sender: 'Juan',
      timestamp: new Date()
    },
    {
      id: '2',
      text: '¡Bienvenidos al grupo!',
      sender: 'María',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage.trim(),
        sender: 'Yo', // Aquí podrías poner el usuario actual
        timestamp: new Date()
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'Yo' ? styles.sentMessage : styles.receivedMessage
    ]}>
      <Text style={styles.messageSender}>{item.sender}</Text>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>
        {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
    </View>
  );

  return (
    <ImageBackground 
      source={require('../../../assets/fondo.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Header 
          customTitle={group.name}
          onMenuPress={() => setSidebarOpen(true)}
          showBackButton
          onBackPress={() => navigation.goBack()}
        />
        
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          style={styles.chatContainer}
          inverted={false}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.input}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Escribe un mensaje..."
            placeholderTextColor="#666"
            multiline
          />
          <TouchableOpacity 
            style={[styles.sendButton, !newMessage.trim() && styles.sendButtonDisabled]}
            onPress={sendMessage}
            disabled={!newMessage.trim()}
          >
            <Ionicons 
              name="send" 
              size={24} 
              color={newMessage.trim() ? "#007AFF" : "#999"} 
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GroupChat;