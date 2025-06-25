// Register.tsx
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
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


axios.defaults.withCredentials = true;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [formData, setFormData] = useState({
    nombre: '',
    correo_electronico: '',
    cedula_identidad: '',
    direccion: '',
    contrasena_hash: '',
    estado: 'activo' as 'activo' | 'inactivo',
    numero_ayudas: 0,
    estado_eliminado: 'activo' as 'activo' | 'eliminado',
  });

  const [csrfToken, setCsrfToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://192.168.1.31:9000/csrf-token');
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

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.31:9000/clientes/registro',
        formData,
        {
          headers: {
            'X-CSRF-Token': csrfToken,
          },
        }
      );

      Alert.alert('Éxito', 'Cliente registrado exitosamente.');
      navigation.navigate('Login');
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
    <LinearGradient
      colors={['#026b6b', '#2D353C']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={RegisterStyles.gradientBackground}
    >
      <SafeAreaView style={RegisterStyles.container}>

        <StatusBar barStyle="light-content" backgroundColor="#00ACAC" />

        {/* Botón de regresar: Mantenemos su posición aquí fuera del ScrollView */}
        <TouchableOpacity
          style={RegisterStyles.backButton}
          onPress={() => navigation.goBack()}
        >
        
          <Icon name="chevron-left" size={28} color="#fff" /> 
        </TouchableOpacity>

        {/* El resto del contenido, que sí se desplaza */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={RegisterStyles.keyboardAvoidingView}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={RegisterStyles.scrollContent}
              keyboardShouldPersistTaps="handled"
            >

        
              <View style={RegisterStyles.headerContainer}>
                <Text style={RegisterStyles.title}>Crear Cuenta</Text>
                <Text style={RegisterStyles.subtitle}>
                  Completa tus datos para comenzar
                </Text>
              </View>

              <View style={RegisterStyles.formContainer}>
                {/* Campos de entrada ... */}
                <View style={RegisterStyles.inputGroup}>
                  <Text style={RegisterStyles.label}>Nombre completo *</Text>
                  <View style={RegisterStyles.inputWithIcon}>
                    <Icon name="account" size={20} color="#999" style={RegisterStyles.icon} />
                    <TextInput
                      style={RegisterStyles.inputField}
                      placeholder="Nombre"
                      placeholderTextColor="#999"
                      value={formData.nombre}
                      onChangeText={(text) => setFormData({ ...formData, nombre: text })}
                      returnKeyType="next"
                      autoCorrect={false}
                    />
                  </View>
                </View>

                <View style={RegisterStyles.inputGroup}>
                  <Text style={RegisterStyles.label}>Correo electrónico *</Text>
                  <View style={RegisterStyles.inputWithIcon}>
                    <Icon name="email" size={20} color="#999" style={RegisterStyles.icon} />
                    <TextInput
                      style={RegisterStyles.inputField}
                      placeholder="Correo"
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
                </View>

                <View style={RegisterStyles.inputGroup}>
                  <Text style={RegisterStyles.label}>Cédula *</Text>
                  <View style={RegisterStyles.inputWithIcon}>
                    <Icon name="credit-card-outline" size={20} color="#999" style={RegisterStyles.icon} />
                    <TextInput
                      style={RegisterStyles.inputField}
                      placeholder="Cédula"
                      placeholderTextColor="#999"
                      value={formData.cedula_identidad}
                      onChangeText={(text) =>
                        setFormData({ ...formData, cedula_identidad: text })
                      }
                      returnKeyType="next"
                    />
                  </View>
                </View>

                <View style={RegisterStyles.inputGroup}>
                  <Text style={RegisterStyles.label}>Dirección *</Text>
                  <View style={RegisterStyles.inputWithIcon}>
                    <Icon name="map-marker" size={20} color="#999" style={RegisterStyles.icon} />
                    <TextInput
                      style={RegisterStyles.inputField}
                      placeholder="Dirección"
                      placeholderTextColor="#999"
                      value={formData.direccion}
                      onChangeText={(text) =>
                        setFormData({ ...formData, direccion: text })
                      }
                      returnKeyType="next"
                    />
                  </View>
                </View>

                <View style={RegisterStyles.inputGroup}>
                  <Text style={RegisterStyles.label}>Contraseña *</Text>
                  <View style={RegisterStyles.passwordContainer}>
                    <Icon name="lock" size={20} color="#999" style={RegisterStyles.icon} />
                    <TextInput
                      style={RegisterStyles.passwordInput}
                      placeholder="Contraseña"
                      placeholderTextColor="#999"
                      secureTextEntry={!showPassword}
                      value={formData.contrasena_hash}
                      onChangeText={(text) =>
                        setFormData({ ...formData, contrasena_hash: text })
                      }
                      returnKeyType="done"
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      style={RegisterStyles.passwordToggle}
                    >
                      <Icon
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={20}
                        color="#999"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={RegisterStyles.registerButton}
                  onPress={handleRegister}
                  activeOpacity={0.7}
                >
                  <Text style={RegisterStyles.registerButtonText}>Registrarse</Text>
                </TouchableOpacity>

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
    </LinearGradient>
  );
}