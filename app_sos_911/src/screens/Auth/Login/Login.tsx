// Importaciones necesarias desde React y React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../../../navigation/Navigator';
import { LoginStyles } from './LoginStyles';
import { Alert } from 'react-native'; // Agrega esta importación

// Componente funcional para la pantalla de inicio de sesión
export default function LoginScreen() {
  // Hook de navegación para manejar cambios de pantalla
  const navigation = useNavigation<LoginScreenNavigationProp>();

  // Estados locales para almacenar el email y la contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función de sanitización de entradas para prevenir inyecciones de código
  const sanitizeInput = (input: string): string => {
    // Elimina caracteres especiales que pueden ser peligrosos (ej. <, >, ", ', ;)
    return input.replace(/[<>"/';]/g, ''); // Aquí podrías agregar más caracteres si es necesario
  };

  // Manejo del inicio de sesión, que incluye la sanitización de las entradas
  const handleLogin = () => {
    // Sanitizamos los valores de email y contraseña antes de usarlos
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);

    // Validación simple: asegurarse de que el email y la contraseña no estén vacíos
    if (sanitizedEmail && sanitizedPassword) {
      // Si todo está bien, podemos proceder con el inicio de sesión
      console.log('Email:', sanitizedEmail, 'Password:', sanitizedPassword);
      
      // Aquí iría la lógica para autenticar al usuario (en este caso con datos "quemados")
      // Si el email y contraseña son correctos, navegamos a la pantalla 'Home'
      navigation.navigate('Home');
    } else {
      // Mostrar un mensaje de error si las entradas son inválidas
      Alert.alert('Alerta', 'Por favor ingresa un correo y una contraseña válidos.');
    }
  };

  return (
    // Imagen de fondo de la pantalla de inicio de sesión
    <ImageBackground
      source={require('../../../assets/fondo1.jpg')} // Ruta de la imagen de fondo
      style={LoginStyles.backgroundImage}
      resizeMode="cover"
    >
      {/* Contenedor principal seguro para manejar los bordes de la pantalla */}
      <SafeAreaView style={LoginStyles.container}>

        {/* Contenedor del logo y título */}
        <View style={LoginStyles.logoContainer}>
          {/* Imagen del logotipo de la aplicación */}
          <Image
            source={require('../../../assets/logo/icon.png')} // Ruta del icono de la aplicación
            style={LoginStyles.logo}
            resizeMode="contain"
          />

          {/* Título de la aplicación */}
          <Text style={LoginStyles.title}>
            <Text style={LoginStyles.sosText}>Sos</Text>
            <Text style={LoginStyles.nineElevenText}>911</Text>
          </Text>

          {/* Subtítulo debajo del título */}
          <Text style={LoginStyles.subtitle}>Inicia sesión para continuar</Text>
        </View>

        {/* Contenedor de los campos de entrada */}
        <View style={LoginStyles.inputContainer}>
          {/* Campo de entrada para el correo electrónico */}
          <TextInput
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={LoginStyles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          {/* Campo de entrada para la contraseña */}
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={LoginStyles.input}
            autoCapitalize="none"
          />

          {/* Botón para iniciar sesión */}
          <TouchableOpacity
            onPress={handleLogin} // Llamada a la función de inicio de sesión con sanitización
            style={LoginStyles.loginButton}
          >
            <Text style={LoginStyles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          {/* Contenedor para el mensaje de registro */}
          <View style={LoginStyles.registerContainer}>
            <Text style={LoginStyles.registerText}>¿No tienes una cuenta?</Text>
            {/* Botón para navegar a la pantalla de registro */}
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={LoginStyles.registerLink}>Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}
