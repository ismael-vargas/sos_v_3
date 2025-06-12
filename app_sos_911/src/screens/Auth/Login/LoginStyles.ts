// Importamos StyleSheet desde React Native para definir los estilos
import { StyleSheet } from 'react-native';

// Definimos los estilos de la pantalla de inicio de sesión
export const LoginStyles = StyleSheet.create({
  
  // Contenedor principal que centra todos los elementos en la pantalla
  container: {
    flex: 1, // Ocupa toda la pantalla
    alignItems: 'center', // Centra elementos horizontalmente
    justifyContent: 'center', // Centra elementos verticalmente
    padding: 20, // Añade un pequeño margen interno
  },

  // Imagen de fondo que cubre toda la pantalla
  backgroundImage: {
    flex: 1, // Permite que la imagen de fondo ocupe todo el espacio disponible
    width: '100%', // Asegura que la imagen se expanda al ancho completo
    height: '100%', // Asegura que la imagen se expanda al alto completo
  },

  // Contenedor del logo y título
  logoContainer: {
    marginBottom: 30, // Espaciado inferior para separar del siguiente elemento
    alignItems: 'center', // Centra los elementos hijos horizontalmente
  },

  // Estilo del logo de la aplicación
  logo: {
    width: 100, // Ancho de la imagen del logo
    height: 100, // Alto de la imagen del logo
    marginBottom: 20, // Espaciado inferior para separarlo del título
  },

  // Estilo del título principal "Sos911"
  title: {
    fontSize: 40, // Tamaño grande para que resalte
    fontWeight: 'bold', // Negrita para mayor impacto visual
    color: '#fff', // Texto en color blanco
    marginBottom: 10, // Espaciado inferior
    textAlign: 'center', // Centra el texto
  },

  // Estilo para la palabra "Sos" dentro del título
  sosText: {
    fontWeight: 'bold', // Negrita para destacar
    color: '#333', // Color oscuro para contraste
  },

  // Estilo para "911" dentro del título
  nineElevenText: {
    fontWeight: 'bold', // Negrita para destacar
    color: '#00ACAC', // Color celeste para llamar la atención
  },

  // Estilo del subtítulo que indica que el usuario debe iniciar sesión
  subtitle: {
    fontSize: 16, // Tamaño de fuente moderado
    fontWeight: '400', // Peso de fuente normal
    color: '#220', // Gris oscuro para mejor legibilidad
    marginBottom: 30, // Espaciado inferior
    textAlign: 'center', // Centra el texto en la pantalla
  },

  // Contenedor de los campos de entrada
  inputContainer: {
    width: '85%', // Hace que los inputs no sean demasiado anchos
    maxWidth: 400, // Evita que los inputs sean demasiado grandes en pantallas grandes
  },

  // Estilos para los campos de entrada de email y contraseña
  input: {
    backgroundColor: '#fff', // Fondo blanco para mejor visibilidad
    borderRadius: 10, // Bordes redondeados
    padding: 15, // Espaciado interno para mejorar la usabilidad
    marginBottom: 15, // Espaciado entre los inputs
    shadowColor: '#000', // Sombra sutil para un efecto elevado
    shadowOffset: {
      width: 0, // No hay desplazamiento horizontal de la sombra
      height: 2, // Sombra ligeramente desplazada hacia abajo
    },
    shadowOpacity: 0.05, // Opacidad baja para un efecto suave
    shadowRadius: 3.84, // Difuminado de la sombra
    elevation: 5, // Efecto de sombra en Android
  },

  // Botón de inicio de sesión
  loginButton: {
    backgroundColor: '#00ACAC', // Color llamativo del botón
    borderRadius: 10, // Bordes redondeados para un diseño moderno
    padding: 15, // Espaciado interno para mayor comodidad al tocar
    width: '100%', // Ocupa todo el ancho disponible en el contenedor
    alignItems: 'center', // Centra el texto dentro del botón
    marginTop: 10, // Espaciado superior para separarlo de los inputs
  },

  // Texto dentro del botón de inicio de sesión
  loginButtonText: {
    color: '#fff', // Texto en color blanco para contrastar con el fondo
    fontSize: 16, // Tamaño de fuente adecuado para la lectura
    fontWeight: '600', // Peso medio para resaltar
  },

  // Contenedor del mensaje de registro
  registerContainer: {
    flexDirection: 'row', // Alinea los elementos en una fila
    marginTop: 20, // Espaciado superior
  },

  // Texto que pregunta si el usuario tiene cuenta
  registerText: {
    color: '#FFFFFF', // Texto en color blanco
    fontSize: 14, // Tamaño de fuente pequeño pero legible
  },

  // Enlace para registrarse
  registerLink: {
    color: '#007B9E', // Azul para indicar que es un enlace
    fontSize: 14, // Tamaño de fuente similar al texto anterior
    fontWeight: '600', // Negrita para resaltarlo
    marginLeft: 5, // Espaciado izquierdo para separarlo del texto anterior
  },
});
