import React from 'react';
import { View } from 'react-native';
import { openURL } from 'expo-linking';
import { AppText } from '../atoms/appText';
import { AppIcon } from '../atoms/appIcon';
import { AppButton } from '../atoms/appButton';
import { Colors } from '../../constants/colores';
import {
  permissionDeniedCardStyles,
  permissionDeniedStepStyles,
} from '../../constants/styles';

// ─── Component ────────────────────────────────────────────────────────────────

export const PermissionDeniedCard: React.FC = () => {
  const openSettings = () => openURL('app-settings:');

  return (
    <View style={permissionDeniedCardStyles.card}>
      <View style={permissionDeniedCardStyles.iconWrapper}>
        <AppIcon name="camera-outline" size="lg" color={Colors.error} />
      </View>

      <View style={permissionDeniedCardStyles.textGroup}>
        <AppText variant="subtitle">Acceso a cámara denegado</AppText>
        <AppText variant="body" color="secondary" style={permissionDeniedCardStyles.description}>
          Esta aplicación necesita acceso a tu cámara para poder escanear
          códigos QR y de barras.
        </AppText>
      </View>

      <View style={permissionDeniedCardStyles.steps}>
        <Step number="1" text="Abre los ajustes de tu dispositivo" />
        <Step number="2" text='Busca "QR Scanner" en la lista de apps' />
        <Step number="3" text="Habilita el permiso de Cámara" />
      </View>

      <AppButton
        label="Abrir ajustes"
        onPress={openSettings}
        variant="secondary"
        size="md"
        fullWidth
      />
    </View>
  );
};

// ─── Sub-component ────────────────────────────────────────────────────────────

interface StepProps {
  number: string;
  text: string;
}

const Step: React.FC<StepProps> = ({ number, text }) => (
  <View style={permissionDeniedStepStyles.row}>
    <View style={permissionDeniedStepStyles.numberBadge}>
      <AppText variant="label" color="accent" style={{ fontSize: 10 }}>
        {number}
      </AppText>
    </View>
    <AppText variant="body" color="secondary" style={permissionDeniedStepStyles.text}>
      {text}
    </AppText>
  </View>
);