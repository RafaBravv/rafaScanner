import React from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WelcomeHero } from '../molecules/welcomeHero';
import { AppButton } from '../atoms/appButton';
import { useCameraPermission } from '../../hooks/useCameraPermission';
import { Spacing } from '../../constants/sizes';
import { homeOrganismStyles } from '../../constants/styles';

export const HomeOrganism: React.FC = () => {
  const { isLoading, requestPermission } = useCameraPermission();
  const insets = useSafeAreaInsets();

  const handleOpenCamera = async () => {
    const granted = await requestPermission();
    if (granted) {
      router.push('./camara');
    }
  };

  return (
    <View
      style={[
        homeOrganismStyles.container,
        {
          paddingTop: insets.top + Spacing.xl,
          paddingBottom: insets.bottom + Spacing.xl,
        },
      ]}
    >
      <View style={homeOrganismStyles.hero}>
        <WelcomeHero />
      </View>

      <View style={homeOrganismStyles.footer}>
        <AppButton
          label="Abrir escáner"
          onPress={handleOpenCamera}
          loading={isLoading}
          size="md"
        />
      </View>
    </View>
  );
};