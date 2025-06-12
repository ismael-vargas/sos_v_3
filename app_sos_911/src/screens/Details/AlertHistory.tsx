import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, View, Text } from 'react-native';
import Header from '../../components/Header/Header';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import styles from './AlertHistoryStyles';

// Definición de tipos para las alertas
type AlertType = 'SOS' | '911';
type AlertStatus = 'Resuelto' | 'Activo';

// Datos de ejemplo para las alertas
const alertHistory: { id: number; type: AlertType; date: string; location: string; status: AlertStatus }[] = [
    { id: 1, type: 'SOS', date: '10-11-24 / 7:53:36 pm', location: 'Av. 6 de Diciembre y Patria, Quito, Ecuador', status: 'Resuelto' },
    { id: 2, type: '911', date: '28-09-24 / 8:28:49 pm', location: 'Av. Amazonas y Colón, Quito, Ecuador', status: 'Activo' },
    { id: 3, type: 'SOS', date: '22-08-24 / 6:15:10 pm', location: 'C.C. Quicentro Sur, Quito, Ecuador', status: 'Resuelto' },
    { id: 4, type: '911', date: '10-07-24 / 5:40:22 am', location: 'Hospital Metropolitano, Quito, Ecuador', status: 'Activo' },
    { id: 5, type: 'SOS', date: '15-06-24 / 4:30:00 pm', location: 'Av. Simón Bolívar, Quito, Ecuador', status: 'Resuelto' },
    { id: 6, type: '911', date: '02-05-24 / 11:45:55 pm', location: 'Barrio La Floresta, Quito, Ecuador', status: 'Activo' },
];

const AlertHistoryComponent = ({ navigation }: { navigation: any }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <ImageBackground source={require('../../assets/fondo.png')} style={styles.backgroundImage}>
            <SafeAreaView style={styles.container}>
                
                {/* 📌 Corregido: Ahora el menú lleva a Historial de Alertas */}
                <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Historial de Alertas" />

                {/* 📌 Lista de alertas con Scroll mejorado */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {alertHistory.length > 0 ? (
                        alertHistory.map(alert => (
                            <View key={alert.id} style={styles.alertCard}>
                                <View style={styles.alertHeader}>
                                    <Text style={styles.alertType}>{alert.type}</Text>
                                    <Text style={[styles.alertStatus, alert.status === 'Resuelto' ? styles.status_resuelto : styles.status_activo]}>
                                        {alert.status}
                                    </Text>
                                </View>
                                <Text style={styles.alertText}><Text style={styles.boldText}>📅 Fecha:</Text> {alert.date}</Text>
                                <Text style={styles.alertText}><Text style={styles.boldText}>📍 Ubicación:</Text> {alert.location}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noDataText}>No hay alertas disponibles.</Text>
                    )}
                </ScrollView>

                <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            </SafeAreaView>
        </ImageBackground>
    );
};

export default AlertHistoryComponent;
