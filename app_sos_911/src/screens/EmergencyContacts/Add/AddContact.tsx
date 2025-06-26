import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { styles } from './AddContactStyles';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


type AddContactProps = StackScreenProps<RootStackParamList, 'AddContact'>;

const AddContact = ({ navigation, route }: AddContactProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [detail, setDetail] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleSave = () => {
    if (!name.trim() || !phone.trim()) {
      Alert.alert('Error', 'Por favor, completa todos los campos obligatorios.');
      return;
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      phone,
      relation: detail,
      image: image ? { uri: image } : require('../../../assets/default-avatar.jpg'),
    };

    if (route.params?.addContact) {
      route.params.addContact(newContact);
    }

    Alert.alert('Éxito', 'Contacto guardado correctamente.');
    navigation.goBack();
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso requerido', 'Se necesita acceso a la galería.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <LinearGradient
    colors={['#1d7a7a', '#0f172a']}
    style={styles.backgroundImage}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 0 }}
  >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <SafeAreaView style={styles.container}>
            <View style={styles.form}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                {image ? (
                  <Image source={{ uri: image }} style={styles.contactImage} />
                ) : (
                  <Text style={styles.imagePlaceholder}>Seleccionar foto</Text>
                )}
              </TouchableOpacity>

              <Text style={styles.label}>Nombre:</Text>
              <TextInput style={styles.input} placeholder="Ej. Juan Pérez" value={name} onChangeText={setName} />

              <Text style={styles.label}>Teléfono:</Text>
              <TextInput
                style={styles.input}
                placeholder="+593 987 654 321"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />

              <Text style={styles.label}>Detalle:</Text>
              <TextInput style={styles.input} placeholder="Ej. Amigo cercano" value={detail} onChangeText={setDetail} />

              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Feather name="save" size={24} color="white" />
                <Text style={[styles.saveButtonText, { marginLeft: 8 }]}>Guardar</Text>
              </TouchableOpacity>

            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
     </LinearGradient>
  );
};

export default AddContact;
