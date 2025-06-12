import { StyleSheet, Platform, StatusBar } from 'react-native';
import { normalize } from '../../utils/dimensions';

const styles = StyleSheet.create({
    // Estilo para el contenedor principal de la pantalla
    container: {
        flex: 1,
        padding: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
 // Estilo para la imagen de fondo, asegurando que cubra toda la pantalla
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
 // Estilo para el contenedor de scroll, añadiendo un padding inferior
    scrollContainer: {
        paddingBottom: normalize(20),
    },
 // Estilo para las tarjetas de alerta, con bordes redondeados y sombras
    alertCard: {
        backgroundColor: '#FFFFFF',
        padding: normalize(15),
        marginVertical: normalize(10),
        borderRadius: normalize(12),
        borderLeftWidth: 5,
        borderLeftColor: '#00ACAC', 
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        overflow: 'hidden',
    },
 // Estilo para el encabezado de cada tarjeta de alerta, con elementos en fila
    alertHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: normalize(5),
    },
 // Estilo para el tipo de alerta (SOS, 911)
    alertType: {
        fontSize: normalize(16),
        fontWeight: 'bold',
        color: '#333',
    },
 // Estilo para el estado de la alerta (Resuelto, Activo)
    alertStatus: {
        fontSize: normalize(14),
        fontWeight: 'bold',
        paddingVertical: normalize(3),
        paddingHorizontal: normalize(10),
        borderRadius: normalize(8),
        textAlign: 'center',
    },

    // 📌 Colores según estado
    status_resuelto: { backgroundColor: '#5CB85C', color: '#FFF' }, // Verde
    status_activo: { backgroundColor: '#D9534F', color: '#FFF' }, // Rojo

    alertText: {
        fontSize: normalize(15),
        color: '#444',
        marginBottom: normalize(5),
    },

    boldText: {
        fontWeight: 'bold',
        color: '#00ACAC', // Color Figma
    },

    noDataText: {
        fontSize: normalize(16),
        color: '#AAA',
        textAlign: 'center',
        marginTop: normalize(20),
        fontStyle: 'italic',
    },
});

export default styles;
