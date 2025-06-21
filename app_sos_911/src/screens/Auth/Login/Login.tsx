// Login.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { LoginScreenNavigationProp } from '../../../navigation/Navigator';
import { LoginStyles } from './LoginStyles';

axios.defaults.withCredentials = true;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Obtener el token CSRF
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://192.168.1.31:9000/csrf-token');
        setCsrfToken(response.data.csrfToken);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error('Error CSRF:', error.response?.data || error.message);
          Alert.alert('Error', 'No se pudo obtener el token de seguridad');
        } else if (error instanceof Error) {
          console.error('Error:', error.message);
          Alert.alert('Error', 'Error inesperado');
        }
      }
    };

    fetchCsrfToken();
  }, []);

  // Manejar el inicio de sesión
const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Error', 'Por favor ingrese email y contraseña');
    return;
  }

  setIsLoading(true);
  
  try {
    const response = await axios.post(
      'http://192.168.1.31:9000/login-clientes',
      {
        correo_electronico: email,
        contrasena_hash: password,
      },
      {
        headers: {
          'X-CSRF-Token': csrfToken,
        },
      }
    );

    if (response.data.success) {
      // Guardar datos de usuario en tu estado/contexto/async storage
      Alert.alert('Éxito', 'Inicio de sesión exitoso');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', response.data.message);
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      Alert.alert('Error', error.response?.data?.message || 'Error al iniciar sesión');
    } else {
      Alert.alert('Error', 'Error desconocido');
    }
  } finally {
    setIsLoading(false);
  }
};
  return (
    <ImageBackground
      source={require('../../../assets/fondo1.jpg')}
      style={LoginStyles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={LoginStyles.container}>
        <View style={LoginStyles.logoContainer}>
          <Image
            source={require('../../../assets/logo/icon.png')}
            style={LoginStyles.logo}
            resizeMode="contain"
          />
          <Text style={LoginStyles.title}>
            <Text style={LoginStyles.sosText}>Sos</Text>
            <Text style={LoginStyles.nineElevenText}>911</Text>
          </Text>
          <Text style={LoginStyles.subtitle}>Inicia sesión para continuar</Text>
        </View>

        <View style={LoginStyles.inputContainer}>
          <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={LoginStyles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={LoginStyles.input}
            autoCapitalize="none"
          />

          <TouchableOpacity
            onPress={handleLogin}
            style={LoginStyles.loginButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={LoginStyles.loginButtonText}>Iniciar Sesión</Text>
            )}
          </TouchableOpacity>

          <View style={LoginStyles.registerContainer}>
            <Text style={LoginStyles.registerText}>¿No tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={LoginStyles.registerLink}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}