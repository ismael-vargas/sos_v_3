// Register.tsx
// Importaciones necesarias desde React y React Native
import React, { useState, useEffect } from 'react';
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
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RegisterStyles } from './RegisterStyles';
import { RegisterScreenNavigationProp } from '../../../navigation/Navigator';
import { crearCliente } from '../../../api/clientesService';
import axios from 'axios';

axios.defaults.withCredentials = true; // Permitir el envío de cookies en las solicitudes

// Componente funcional para la pantalla de registro
export default function RegisterScreen() {
  // Hook de navegación para manejar cambios de pantalla
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo_electronico: '',
    cedula_identidad: '',
    direccion: '',
    contrasena_hash: '',
    estado: 'activo' as 'activo' | 'inactivo', // Valor válido según la interfaz
    numero_ayudas: 0, // Valor predeterminado
    estado_eliminado: 'activo' as 'activo' | 'eliminado', // Valor válido según la interfaz
  });

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://192.168.1.31:9000/csrf-token'); // Ruta para obtener el token CSRF
        setCsrfToken(response.data.csrfToken);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error de Axios al obtener el token CSRF:', error.response?.data || error.message);
          Alert.alert('Error', error.response?.data?.message || 'No se pudo obtener el token CSRF.');
        } else if (error instanceof Error) {
          console.error('Error estándar al obtener el token CSRF:', error.message);
          Alert.alert('Error', error.message || 'Ocurrió un error inesperado.');
        } else {
          console.error('Error desconocido al obtener el token CSRF:', error);
          Alert.alert('Error', 'Ocurrió un error inesperado.');
        }
      }
    };

    fetchCsrfToken();
  }, []);

  // Función para manejar el registro del usuario
  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.31:9000/registro-clientes', // Ruta para registrar el cliente
        formData,
        {
          headers: {
            'X-CSRF-Token': csrfToken, // Incluir el token CSRF en los encabezados
          },
        }
      );

      Alert.alert('Éxito', 'Cliente registrado exitosamente.');
      navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error de Axios al registrar cliente:', error.response?.data || error.message);
        Alert.alert('Error', error.response?.data?.message || 'No se pudo registrar el cliente.');
      } else if (error instanceof Error) {
        console.error('Error estándar al registrar cliente:', error.message);
        Alert.alert('Error', error.message || 'Ocurrió un error inesperado.');
      } else {
        console.error('Error desconocido al registrar cliente:', error);
        Alert.alert('Error', 'Ocurrió un error inesperado.');
      }
    }
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
                  value={formData.nombre}
                  onChangeText={(text) => setFormData({ ...formData, nombre: text })}
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
                  value={formData.correo_electronico}
                  onChangeText={(text) =>
                    setFormData({ ...formData, correo_electronico: text })
                  }
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
                  value={formData.cedula_identidad}
                  onChangeText={(text) =>
                    setFormData({ ...formData, cedula_identidad: text })
                  }
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
                  value={formData.direccion}
                  onChangeText={(text) =>
                    setFormData({ ...formData, direccion: text })
                  }
                  returnKeyType="next"
                />
              </View>

              {/* Campo de entrada para la contraseña */}
              <View style={RegisterStyles.inputGroup}>
                <Text style={RegisterStyles.label}>Contraseña</Text>
                <TextInput
                  style={RegisterStyles.input}
                  placeholder="Mínimo 8 caracteres"
                  placeholderTextColor="#999"
                  secureTextEntry
                  value={formData.contrasena_hash}
                  onChangeText={(text) =>
                    setFormData({ ...formData, contrasena_hash: text })
                  }
                  returnKeyType="done"
                />
              </View>

              {/* Botón de registro */}
              <TouchableOpacity
                style={RegisterStyles.registerButton}
                onPress={handleRegister}
                activeOpacity={0.7}
              >
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
