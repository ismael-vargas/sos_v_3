import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, View, Text } from 'react-native';
import Header from '../../components/Header/Header';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import styles from './AlertHistoryStyles';
import { ShieldAlert, Siren, Calendar, MapPin } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

const AlertCard = ({ alert }: { alert: { id: number; type: AlertType; date: string; location: string; status: AlertStatus } }) => {
  const isSOS = alert.type === 'SOS';
  const borderStyle = isSOS ? styles.borderSOS : styles.border911;
  const icon = isSOS ? (
    <Siren size={38} color="#FF9E5D" />
  ) : (
    <ShieldAlert size={38} color="#FF4D4D" />
  );
  const statusStyle = [
    styles.statusBadge,
    alert.status === 'Resuelto' ? styles.status_resuelto : styles.status_activo,
  ];
  return (
    <View style={[styles.alertCard, borderStyle]}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.cardContent}>
        <View style={styles.headerRow}>
          <View style={styles.alertTitleBlock}>
            <Text style={styles.alertType}>{alert.type}</Text>
            <Text style={styles.alertSubtitle}>Alerta de Seguridad</Text>
          </View>
          <Text style={statusStyle}>{alert.status}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.infoRow}>
          <Calendar size={20} color="#888" style={styles.infoIcon} />
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Fecha y Hora</Text>
            <Text style={styles.infoValue}>{alert.date}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <MapPin size={20} color="#888" style={styles.infoIcon} />
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Ubicación</Text>
            <Text style={styles.infoValue}>{alert.location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const AlertHistoryComponent = ({ navigation }: { navigation: any }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
       <LinearGradient
  colors={['#1d7a7a', '#0f172a']}
  style={styles.backgroundImage}
  start={{ x: 0, y: 1 }}
  end={{ x: 1, y: 0 }}
>
            <SafeAreaView style={styles.container}>
                
                {/* 📌 Corregido: Ahora el menú lleva a Historial de Alertas */}
                <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Historial de Alertas" />

                {/* 📌 Lista de alertas con Scroll mejorado */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {alertHistory.length > 0 ? (
                        alertHistory.map(alert => (
                          <AlertCard key={alert.id} alert={alert} />
                        ))
                    ) : (
                        <Text style={styles.noDataText}>No hay alertas disponibles.</Text>
                    )}
                </ScrollView>

                <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            </SafeAreaView>
        </LinearGradient>
    );
};

export default AlertHistoryComponent;
