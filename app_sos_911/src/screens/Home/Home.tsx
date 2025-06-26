// HomeScreen.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Image,
  Easing,
  Linking,
  Alert
} from 'react-native';
import Svg, { Line, Circle, G } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Phone } from 'lucide-react-native';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { styles } from './HomeStyles';
import { normalize } from '../../utils/dimensions';
import { HomeScreenProps } from './types';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [pressCount, setPressCount] = useState(0);
  const buttonScale = new Animated.Value(1);
  const [rotation, setRotation] = useState(0);
  const animationFrameRef = useRef<number>();
  const countdownAnimValue = useRef(new Animated.Value(0)).current;
  const pressTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Animar la rotación continuamente
    const animate = () => {
      setRotation(prev => (prev + 0.2) % 360);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleResolvePress = () => {
    setIsButtonActive(false);
    setCountdown(3);
    setPressCount(0);
  };

  const renderResolveButton = () => {
    if (!isButtonActive) return null;

    return (
      <TouchableOpacity
        style={styles.resolveButton}
        onPress={handleResolvePress}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#009688', '#009688']} // Verde azulado suave, combina bien con blanco
          style={styles.resolveGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.resolveText}>Resuelto</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const handleEmergencyCall = async () => {
    const phoneNumber = '911';
    const phoneUrl = `tel:${phoneNumber}`;

    try {
      const supported = await Linking.canOpenURL(phoneUrl);

      if (supported) {
        await Linking.openURL(phoneUrl);
      } else {
        Alert.alert(
          'Error',
          'Phone calls are not supported on this device',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Could not initiate phone call',
        [{ text: 'OK' }]
      );
    }
  };

  useEffect(() => {
    if (isCountingDown) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsCountingDown(false);
            setIsButtonActive(true);
            return 3;
          }
          return prev - 1;
        });
      }, 1000);

      Animated.timing(countdownAnimValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();

      return () => {
        clearInterval(timer);
        countdownAnimValue.setValue(0);
      };
    }
  }, [isCountingDown]);

  const handleEmergencyPress = () => {
    if (!isButtonActive && !isCountingDown) {
      // Clear any existing timeout
      if (pressTimeoutRef.current) {
        clearTimeout(pressTimeoutRef.current);
      }

      // Increment press count
      setPressCount(prev => {
        const newCount = prev + 1;
        
        // If we've reached 5 presses, start the countdown
        if (newCount === 5) {
          setIsCountingDown(true);
          setCountdown(3);
          setPressCount(0); // Reset the counter
          return 0;
        }
        
        // Set a timeout to reset the counter if user doesn't complete the sequence
        pressTimeoutRef.current = setTimeout(() => {
          setPressCount(0);
        }, 3000); // Reset after 3 seconds of inactivity

        return newCount;
      });
    }
  };

  const handleCancelPress = () => {
    if (isCountingDown) {
      setIsCountingDown(false);
      setCountdown(3);
      countdownAnimValue.setValue(0);
      setPressCount(0);
    }
  };

  const people = [
    { id: 1, name: 'Sister', image: require('../../assets/chica.jpg'), distance: 0.8 },
    { id: 2, name: 'Dad', image: require('../../assets/ismael.jpg'), distance: 1.2 },
    { id: 3, name: 'Albert', image: require('../../assets/erick.jpg'), distance: 0.5 },
    { id: 4, name: 'Emy jackson', image: require('../../assets/carlos.jpg'), distance: 1 },
  ];

  const renderFuturisticElements = () => {
    const centerX = normalize(200);
    const centerY = normalize(200);
    const maxRadius = normalize(190);

    return (
      <Svg style={styles.linesContainer}>
        {/* Common circles that appear in both states */}
        <G transform={`rotate(${rotation} ${centerX} ${centerY})`}>
          {[0.4, 0.6, 0.8, 1].map((scale, index) => (
            <Circle
              key={`circle-${index}`}
              cx={centerX}
              cy={centerY}
              r={maxRadius * scale}
              stroke="#FFFFFF" // Blanco puro
              strokeWidth="1.5" // Un poco más grueso para más visibilidad
              fill="none"
              strokeDasharray={`${normalize(5)},${normalize(15)}`}
            />
          ))}
        </G>

        {/* Active state connections and people */}
        {isButtonActive && (
          <>
            {people.map((person, index) => {
              const angle = (index * 360) / people.length;
              const angleInRadians = (angle * Math.PI) / 180;
              const radius = maxRadius * person.distance;
              const x = centerX + radius * Math.cos(angleInRadians);
              const y = centerY + radius * Math.sin(angleInRadians);
              const opacity = 1; // Máxima visibilidad

              return (
                <G key={`connection-${person.id}`}>
                  <Line
                    x1={centerX}
                    y1={centerY}
                    x2={x}
                    y2={y}
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    opacity={opacity}
                  />

                  {[0.3, 0.6, 0.9].map((pos, idx) => {
                    const circleX = centerX + (radius * pos) * Math.cos(angleInRadians);
                    const circleY = centerY + (radius * pos) * Math.sin(angleInRadians);
                    return (
                      <Circle
                        key={`dot-${person.id}-${idx}`}
                        cx={circleX}
                        cy={circleY}
                        r="3.5"
                        fill="#FFFFFF"
                        opacity={opacity}
                      />
                    );
                  })}

                  <Circle
                    cx={x}
                    cy={y}
                    r="7"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    opacity={opacity}
                  />
                </G>
              );
            })}
          </>
        )}

        <Circle
          cx={centerX}
          cy={centerY}
          r={normalize(20)}
          fill="rgba(255,255,255,0.35)" // Más blanco en el centro
        />
      </Svg>
    );
  };

  const renderButton = () => {
    return (
      <TouchableOpacity
        onPress={handleEmergencyPress}
        activeOpacity={0.9}
      >
        <LinearGradient
          colors={['#FFAD59', '#FF7E7B']}
          style={[
            styles.innerButton,
            isButtonActive && styles.innerButtonActive
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {isCountingDown ? (
            <View style={styles.countdownContainer}>
              <Text style={styles.countdownText}>{countdown}</Text>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancelPress}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.buttonContent}>
              <Text style={[
                styles.buttonText,
                isButtonActive && styles.buttonTextActive
              ]}>
                {!isButtonActive && pressCount > 0 ? `${pressCount}/5` : 'SOS'}
              </Text>
              {!isButtonActive && (
                <Text style={styles.subtitleText}>Presionar 5 veces</Text>
              )}
            </View>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderNearbyPeople = () => {
    return isButtonActive && (
      <View style={styles.nearbyPeopleContainer}>
        {people.map((person, index) => {
          const angle = (index * 360) / people.length;
          const angleInRadians = (angle * Math.PI) / 180;
          const radius = normalize(140) * person.distance;
          const translateX = radius * Math.cos(angleInRadians);
          const translateY = radius * Math.sin(angleInRadians);

          return (
            <View
              key={person.id}
              style={[
                styles.personBubble,
                {
                  transform: [
                    { translateX },
                    { translateY }
                  ],
                  opacity: Math.max(0.5, 1 - person.distance / 2)
                }
              ]}
            >
              <Image source={person.image} style={styles.personImage} />
              <Text style={styles.personName}>{person.name}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
<LinearGradient
  colors={['#1d7a7a', '#0f172a']}
  style={styles.backgroundImage}
  start={{ x: 0, y: 1 }}
  end={{ x: 1, y: 0 }}
>
      <SafeAreaView style={styles.container}>
        <Header onMenuPress={() => setSidebarOpen(true)} />

        <Text style={styles.title}>
          {isCountingDown
            ? "Presione para cancelar"
            : isButtonActive
              ? "Alerta activa"
              : pressCount > 0 
                ? `Presiona ${5 - pressCount} veces más`
                : "Un toque para tu seguridad"}
        </Text>

        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            {renderFuturisticElements()}
            <Animated.View style={[
              styles.outerButton,
              isButtonActive && styles.outerButtonActive,
            ]}>
              {renderButton()}
            </Animated.View>
            {renderNearbyPeople()}
          </View>

          {renderResolveButton()}
          <TouchableOpacity
            style={styles.emergencyTag}
            onPress={handleEmergencyCall}
          >
            <Phone size={normalize(26)} color="#FF0000FF" />
            <Text style={styles.emergencyText}>911</Text>
          </TouchableOpacity>
        </View>

        <CustomSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;