import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./profileStyles";
import { AntDesign } from "@expo/vector-icons"; // Importar el icono de lápiz
import Header from "../../components/Header/Header";
import CustomSidebar from "../../components/Sidebar/Sidebar";

const ProfileScreen = () => {
  const [fullName, setFullName] = useState("Diana Zambrano");
  const [email, setEmail] = useState("dani@gmail.com");
  const [address, setAddress] = useState("San Juan de Calderón");
  const [password, setPassword] = useState(""); // Deja vacío por defecto
  const [phone, setPhone] = useState("0991234567");
  const [idNumber, setIdNumber] = useState("0102030405");
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState("https://randomuser.me/api/portraits/women/2.jpg");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    setIsEditing(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground 
      source={require("../../assets/fondo.png")} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Ver Perfil" />

        <View style={styles.profileContainer}>
          <View style={localStyles.profileImageContainer}>
            <Image
              source={{ uri: profileImage }}
              style={styles.profileImage}
            />
            {/* Mostrar el ícono de editar solo si está en modo edición */}
            {isEditing && (
              <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
                <AntDesign name="edit" size={20} color="black" />
              </TouchableOpacity>
            )}
          </View>
          {!isEditing ? (
            <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
              <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
          ) : null}
        </View>

        {/* Cambia este View por ScrollView */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.form}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.label}>Nombre completo</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            editable={isEditing}
          />

          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            editable={isEditing}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            editable={isEditing}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Número de identificación</Text>
          <TextInput
            style={styles.input}
            value={idNumber}
            onChangeText={setIdNumber}
            editable={isEditing}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Dirección</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            editable={isEditing}
          />

          {isEditing && (
            <>
              <Text style={styles.label}>Nueva contraseña</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={isEditing}
                placeholder="Nueva contraseña"
                placeholderTextColor="#fff" // <-- Esto hace el placeholder blanco
              />
            </>
          )}

          {isEditing && (
            <TouchableOpacity style={styles.button} onPress={handleSavePress}>
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
      <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </ImageBackground>
  );
};

const localStyles = StyleSheet.create({
  profileImageContainer: {
    position: "relative",
  },
});

export default ProfileScreen;
