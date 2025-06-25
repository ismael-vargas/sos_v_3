// RegisterStyles.ts

import { StyleSheet, Dimensions, Platform } from 'react-native';


const { width, height } = Dimensions.get('window');


export const RegisterStyles = StyleSheet.create({
  // Contenedor principal de la pantalla.
  container: {
    flex: 1, 
    backgroundColor: 'transparent',
  },

  
  keyboardAvoidingView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 90 : 65,
  },


  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
    justifyContent: 'flex-start',
  },

  headerContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },

  // Estilo del título principal.
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },

  // Estilo del subtítulo.
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 22,
  },

  // Contenedor del formulario.
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    marginTop: 5,
  },

  // Grupo de cada campo de entrada.
  inputGroup: {
    marginBottom: 20,
  },

  // Estilo para las etiquetas de los inputs.
  label: {
    fontSize: 15,
    color: '#444',
    marginBottom: 6,
    marginLeft: 2,
    fontWeight: '600',
  },


  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    height: 52,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  icon: {
    marginRight: 10,
    color: '#999',
  },

  inputField: {
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    paddingVertical: 0,
  },


  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    height: 52,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 0,
  },


  passwordToggle: {
    paddingLeft: 10,
  },


  registerButton: {
    backgroundColor: '#008080',
    borderRadius: 28,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#008080',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 12,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.8,
  },


  termsContainer: {
    marginTop: 20,
    paddingHorizontal: 8,
  },


  termsText: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    lineHeight: 18,
  },

  linkText: {
    color: '#00ACAC',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },


  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
  },


  loginText: {
    color: '#666',
    fontSize: 15,
  },

  // Estilo del enlace para iniciar sesión.
  loginLink: {
    color: '#00ACAC',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 6,
  },

  gradientBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },


  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 55 : 30,
    left: 20,
    zIndex: 10,
    padding: 5,
  },
});