import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./InformationStyles";
import Header from "../../components/Header/Header";
import CustomSidebar from "../../components/Sidebar/Sidebar"; 
import { LinearGradient } from 'expo-linear-gradient';

const InformationScreen = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
     <LinearGradient
      colors={['#1d7a7a', '#0f172a']}
      style={styles.backgroundImage}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.container}>
        <Header onMenuPress={() => setSidebarOpen(true)} customTitle="Informacion" />

        <View style={styles.content}>
          <Text style={styles.headerText}>Un toque para tu seguridad</Text>

          <View style={styles.card}>
            <Image
              source={require("../../assets/remove.png")} 
              style={styles.panicImage}
            />
            <Text style={styles.infoText}>
              <Text style={styles.boldText}>Presione el </Text>
              <Text style={styles.redText}>botón de pánico 5 VECES</Text>
              <Text style={styles.boldText}>
                {" "}
                para enviar una alerta de emergencia. Nuestra central recibirá tu
                ubicación en tiempo real y los detalles de la situación. Además,
                tu alerta será visible para la comunidad registrada en la app,
                quienes{" "}
              </Text>
              <Text style={styles.boldText}>podrán ofrecer ayuda</Text>
              <Text style={styles.boldText}> si están cerca.</Text>
              {"\n\n"}
              Tus contactos de emergencia también recibirán{" "}
              <Text style={styles.boldText}>una notificación</Text> para que
              puedan asistir. Recibirás actualizaciones constantes sobre el estado
              de tu alerta (atendida, en proceso, resuelta).{" "}
              <Text style={styles.redText}>
                ¡Por favor, usa esta función únicamente en situaciones de
                emergencia!
              </Text>
            </Text>

          </View>
        </View>

        <CustomSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </View>
 </LinearGradient>
  );
};

export default InformationScreen;
