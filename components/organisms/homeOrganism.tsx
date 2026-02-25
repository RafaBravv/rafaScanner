import React from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WelcomeHero } from '../molecules/welcomeHero';
import { AppButton } from '../atoms/appButton';
import { AppText } from '../atoms/appText';
import { useCameraPermission } from '../../hooks/useCameraPermission';
import { Colors } from '../../constants/colores';
import { Spacing } from '../../constants/sizes';

export const HomeOrganism: React.FC = () => {
  const { isLoading, requestPermission } = useCameraPermission();
  const insets = useSafeAreaInsets();

  const handleOpenCamera = async () => {
    const granted = await requestPermission();
    if (granted) {
      router.push('./camera');
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + Spacing.xl,
          paddingBottom: insets.bottom + Spacing.xl,
        },
      ]}
    >
      <View style={styles.hero}>
        <WelcomeHero />
      </View>

      <View style={styles.footer}>
        <AppButton
          label="Abrir escáner"
          onPress={handleOpenCamera}
          loading={isLoading}
          size="md"
        />
        <AppText variant="caption" color="secondary" style={styles.hint}>
          Se solicitará acceso a la cámara
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.xl,
    justifyContent: 'space-between',
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    gap: Spacing.md,
  },
  hint: {
    textAlign: 'center',
  },
});