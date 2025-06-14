// Register.tsx
// Importaciones necesarias desde React y React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RegisterStyles } from './RegisterStyles';
import { RegisterScreenNavigationProp } from '../../../navigation/Navigator';
import { Ionicons } from '@expo/vector-icons'; // Importa los íconos de Ionicons

// Componente funcional para la pantalla de registro
export default function RegisterScreen() {
  // Hook de navegación para manejar cambios de pantalla
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',        // <-- Añadido
    idNumber: '',     // <-- Añadido
    address: '',
    password: '',
    confirmPassword: '',
  });

  // Estados para manejar la visibilidad de las contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Función para manejar el registro del usuario
  const handleRegister = () => {
    Keyboard.dismiss(); // Oculta el teclado al presionar el botón de registro
    navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión
  };

  return (
    // Contenedor seguro para manejar los bordes de la pantalla en dispositivos modernos
    <SafeAreaView style={RegisterStyles.container}>
      {/* Configuración de la barra de estado */}
      <StatusBar barStyle="light-content" backgroundColor="#00ACAC" />
      
      {/* Evita que el teclado cubra los campos en iOS */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        {/* Permite cerrar el teclado al tocar fuera de los campos de entrada */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={RegisterStyles.scrollContent}
            bounces={false}
          >
            {/* Encabezado de la pantalla */}
            <View style={RegisterStyles.headerContainer}>
              <Text style={RegisterStyles.title}>Crear Cuenta</Text>
              <Text style={RegisterStyles.subtitle}>
                Completa tus datos para comenzar
              </Text>
            </View>

            {/* Contenedor del formulario de registro */}
            <View style={RegisterStyles.formContainer}>
              {/* Campo de entrada para el nombre completo */}
              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Nombre completo</Text>
                <TextInput
                  style={RegisterStyles.input}
                  placeholder="Ej: Juan Pérez"
                  placeholderTextColor="#999"
                  value={formData.fullName}
                  onChangeText={(text) => setFormData({ ...formData, fullName: text })}
                  returnKeyType="next"
                  autoCorrect={false}
                />
              </View>

              {/* Campo de entrada para el correo electrónico */}
              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Correo electrónico</Text>
                <TextInput
                  style={RegisterStyles.input}
                  placeholder="tu@email.com"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={formData.email}
                  onChangeText={(text) => setFormData({ ...formData, email: text })}
                  returnKeyType="next"
                />
              </View>

              {/* Campo de entrada para el teléfono */}
              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Teléfono</Text>
                <TextInput
                  style={RegisterStyles.input}
                  placeholder="Tu número de teléfono"
                  placeholderTextColor="#999"
                  value={formData.phone}
                  onChangeText={(text) => setFormData({ ...formData, phone: text })}
                  returnKeyType="next"
                />
              </View>

              {/* Campo de entrada para el número de identificación */}
              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Número de identificación</Text>
                <TextInput
                  style={RegisterStyles.input}
                  placeholder="Tu número de ID"
                  placeholderTextColor="#999"
                  value={formData.idNumber}
                  onChangeText={(text) => setFormData({ ...formData, idNumber: text })}
                  returnKeyType="next"
                />
              </View>

              {/* Campo de entrada para la dirección */}
              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Dirección</Text>
                <TextInput
                  style={RegisterStyles.input}
                  placeholder="Tu dirección completa"
                  placeholderTextColor="#999"
                  value={formData.address}
                  onChangeText={(text) => setFormData({ ...formData, address: text })}
                  returnKeyType="next"
                />
              </View>

              {/* Campo de entrada para la contraseña */}
              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Contraseña</Text>
                <View style={RegisterStyles.passwordContainer}>
                  <TextInput
                    style={RegisterStyles.passwordInput}
                    placeholder="Mínimo 8 caracteres"
                    placeholderTextColor="#999"
                    secureTextEntry={!showPassword}
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                    returnKeyType="next"
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#999" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Campo de entrada para confirmar la contraseña */}
              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Confirmar contraseña</Text>
                <View style={RegisterStyles.passwordContainer}>
                  <TextInput
                    style={RegisterStyles.passwordInput}
                    placeholder="Repite tu contraseña"
                    placeholderTextColor="#999"
                    secureTextEntry={!showConfirmPassword}
                    value={formData.confirmPassword}
                    onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                    returnKeyType="done"
                  />
                  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="#999" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Mensaje de términos y política de privacidad */}
              <View style={RegisterStyles.termsContainer}>
                <Text style={RegisterStyles.termsText}>
                  Al hacer clic en Registrarse, aceptas nuestros{' '}
                  <Text style={RegisterStyles.linkText}>Términos</Text> y has leído nuestra{' '}
                  <Text style={RegisterStyles.linkText}>Política de datos</Text>, incluido nuestro{' '}
                  <Text style={RegisterStyles.linkText}>Uso de cookies</Text>.
                </Text>
              </View>

              {/* Botón de registro */}
              <TouchableOpacity style={RegisterStyles.registerButton} onPress={handleRegister} activeOpacity={0.7}>
                <Text style={RegisterStyles.registerButtonText}>Registrarse</Text>
              </TouchableOpacity>

              {/* Enlace para iniciar sesión si ya tiene una cuenta */}
              <View style={RegisterStyles.loginContainer}>
                <Text style={RegisterStyles.loginText}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={RegisterStyles.loginLink}>Iniciar sesión</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
