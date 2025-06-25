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
  backgroundGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    color: '#fff', // Color oscuro para contraste
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
    color: '#fff', // Cambiado a blanco para mejor visibilidad
    marginBottom: 30, // Espaciado inferior
    textAlign: 'center', // Centra el texto en la pantalla
  },

  // Contenedor de los campos de entrada
  inputContainer: {
    width: '85%', // Hace que los inputs no sean demasiado anchos
    maxWidth: 400, // Evita que los inputs sean demasiado grandes en pantallas grandes
  },

  // ***** NUEVOS ESTILOS PARA INPUTS CON ICONOS *****
  // Envoltorio para el TextInput y el Icon
  inputWrapper: {
    flexDirection: 'row', // Para que el icono y el texto estén en la misma fila
    alignItems: 'center', // Centra verticalmente el icono y el texto
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 15, // Añadir padding horizontal aquí
    height: 50, // Altura fija para el contenedor
  },
  // Estilo para el icono dentro del input
  icon: {
    marginRight: 10, // Espacio a la derecha del icono
    color: '#999', // Color del icono
  },
  // Estilo del TextInput cuando hay un icono
  inputField: {
    flex: 1, // Para que el TextInput ocupe el resto del espacio disponible
    paddingVertical: 0, // Ajustar el padding vertical del input
    fontSize: 16, // Tamaño de fuente para el texto del input
    color: '#333', // Color del texto del input
  },
  // **********************************************


  // Se eliminan los estilos 'input' originales que solo se aplicaban al TextInput directamente
  // input: {
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   padding: 15,
  //   marginBottom: 15,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.05,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },

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
    fontSize: 18, // Tamaño de fuente adecuado para la lectura
    fontWeight: '600', // Peso medio para resaltar
  },

  // Contenedor del mensaje de registro
  registerContainer: {
    flexDirection: 'row', // Alinea los elementos en una fila
    marginTop: 20, // Espaciado superior
     justifyContent: 'center', 
  },

  // Texto que pregunta si el usuario tiene cuenta
  registerText: {
    color: '#FFFFFF', // Texto en color blanco
    fontSize: 14, // Tamaño de fuente pequeño pero legible
  },

  // Enlace para registrarse
  registerLink: {
    color: '#66F0E6',// Azul para indicar que es un enlace
    fontSize: 14, // Tamaño de fuente similar al texto anterior
    fontWeight: '600', // Negrita para resaltarlo
    marginLeft: 5, // Espaciado izquierdo para separarlo del texto anterior
  },
});