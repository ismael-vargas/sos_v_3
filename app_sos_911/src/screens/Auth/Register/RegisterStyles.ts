// RegisterStyles.ts
// Importamos los módulos necesarios de React Native para definir estilos y obtener las dimensiones de la pantalla.
import { StyleSheet, Dimensions, Platform } from 'react-native';

// Obtenemos el ancho y alto de la pantalla del dispositivo.
const { width, height } = Dimensions.get('window');

// Creamos los estilos para la pantalla de registro.
export const RegisterStyles = StyleSheet.create({
  // Contenedor principal de la pantalla.
  container: {
    flex: 1, // Ocupa todo el espacio disponible.
    backgroundColor: '#f5f5f5', // Color de fondo gris claro.
  },
  
  // Estilos para el contenido dentro del ScrollView.
  scrollContent: {
    flexGrow: 1, // Permite que el contenido se expanda si es necesario.
    paddingHorizontal: 20, // Espaciado lateral de 20 píxeles.
  },
  
  // Contenedor del encabezado (título y subtítulo).
  headerContainer: {
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Mayor margen superior en iOS para evitar la muesca.
    paddingBottom: 20, // Espaciado inferior.
    alignItems: 'center', // Centra el contenido horizontalmente.
  },
  
  // Estilo del título principal.
  title: {
    fontSize: 26, // Tamaño de fuente grande.
    fontWeight: 'bold', // Texto en negrita.
    color: '#00ACAC', // Color verde azulado.
    marginBottom: 8, // Espaciado inferior.
  },
  
  // Estilo del subtítulo.
  subtitle: {
    fontSize: 15, // Tamaño de fuente mediano.
    color: '#333', // Color de texto gris oscuro.
    textAlign: 'center', // Centra el texto.
    paddingHorizontal: 20, // Margen lateral.
  },
  
  // Contenedor del formulario.
  formContainer: {
    width: '100%', // Ocupa todo el ancho disponible.
    paddingTop: 20, // Espaciado superior.
  },
  
  // Grupo de cada campo de entrada.
  inputGroup: {
    marginBottom: 16, // Espaciado entre cada campo.
  },
  
  // Estilo para las etiquetas de los inputs.
  label: {
    fontSize: 14, // Tamaño de fuente pequeño.
    color: '#444', // Color de texto gris oscuro.
    marginBottom: 4, // Espaciado inferior.
    marginLeft: 4, // Pequeño margen izquierdo.
  },
  
  // Estilo para los campos de entrada de texto.
  input: {
    backgroundColor: '#fff', // Fondo blanco.
    borderRadius: 12, // Bordes redondeados.
    height: 48, // Altura fija del campo.
    paddingHorizontal: 16, // Espaciado interno horizontal.
    fontSize: 16, // Tamaño de fuente mediano.
    color: '#333', // Color del texto.
  },
  
  // Contenedor para los inputs de contraseña con icono de visibilidad.
  passwordContainer: {
    flexDirection: 'row', // Organiza los elementos en fila.
    alignItems: 'center', // Alinea verticalmente los elementos.
    backgroundColor: '#fff', // Fondo blanco.
    borderRadius: 12, // Bordes redondeados.
    height: 48, // Altura fija.
    paddingHorizontal: 16, // Espaciado interno horizontal.
  },
  
  // Estilo específico para los inputs de contraseña.
  passwordInput: {
    flex: 1, // Ocupa todo el espacio disponible.
    fontSize: 16, // Tamaño de fuente mediano.
    color: '#333', // Color del texto.
  },
  
  // Botón de registro.
  registerButton: {
    backgroundColor: '#00ACAC', // Color de fondo verde azulado.
    borderRadius: 12, // Bordes redondeados.
    height: 52, // Altura fija.
    justifyContent: 'center', // Centra el texto verticalmente.
    alignItems: 'center', // Centra el texto horizontalmente.
    marginTop: 24, // Espaciado superior.
  },
  
  // Texto dentro del botón de registro.
  registerButtonText: {
    color: '#fff', // Color del texto blanco.
    fontSize: 16, // Tamaño de fuente mediano.
    fontWeight: '600', // Negrita media.
  },
  
  // Contenedor del mensaje de términos y condiciones.
  termsContainer: {
    marginTop: 16, // Espaciado superior.
    paddingHorizontal: 4, // Margen lateral mínimo.
  },
  
  // Estilo del texto de términos y condiciones.
  termsText: {
    fontSize: 12, // Tamaño de fuente pequeño.
    color: '#666', // Color de texto gris medio.
    textAlign: 'center', // Centra el texto.
    lineHeight: 16, // Espaciado entre líneas.
  },
  
  // Estilo para los enlaces dentro del texto de términos y condiciones.
  linkText: {
    color: '#00ACAC', // Color verde azulado.
    fontWeight: '600', // Negrita media.
    textDecorationLine: 'underline', // Subrayado.
  },
  
  // Contenedor para la sección de inicio de sesión.
  loginContainer: {
    flexDirection: 'row', // Organiza los elementos en fila.
    justifyContent: 'center', // Centra los elementos horizontalmente.
    alignItems: 'center', // Alinea los elementos verticalmente.
    marginTop: 16, // Espaciado superior.
  },
  
  // Texto informativo sobre la opción de iniciar sesión.
  loginText: {
    color: '#666', // Color gris medio.
    fontSize: 14, // Tamaño de fuente pequeño.
  },
  
  // Estilo del enlace para iniciar sesión.
  loginLink: {
    color: '#00ACAC', // Color verde azulado.
    fontSize: 14, // Tamaño de fuente pequeño.
    fontWeight: '600', // Negrita media.
    marginLeft: 4, // Pequeño margen izquierdo para separación.
  },
});
