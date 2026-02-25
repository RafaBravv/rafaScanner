import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { AppText } from '../atoms/appText';
import { AppIcon } from '../atoms/appIcon';
import { Colors } from '../../constants/colores';
import { welcomeHeroStyles } from '../../constants/styles';

export const WelcomeHero: React.FC = () => {
  const fadeAnim  = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay: 100,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        delay: 100,
        speed: 14,
        bounciness: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <Animated.View
      style={[
        welcomeHeroStyles.container,
        { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
      ]}
    >
      <View style={welcomeHeroStyles.iconWrapper}>
        <AppIcon name="scan-outline" size="xl" color={Colors.primary} />
      </View>

      <View style={welcomeHeroStyles.textGroup}>
        <AppText variant="display" style={welcomeHeroStyles.title}>
          QR{'\n'}Scanner
        </AppText>
        <AppText variant="body" color="secondary" style={welcomeHeroStyles.subtitle}>
          Escanea códigos QR y de barras{'\n'}de forma rápida y sencilla.
        </AppText>
      </View>
    </Animated.View>
  );
};