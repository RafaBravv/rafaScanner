import React from 'react';
import { View, StyleSheet } from 'react-native';
import { openURL } from 'expo-linking';
import { AppText } from '../atoms/appText';
import { AppIcon } from '../atoms/appIcon';
import { AppButton } from '../atoms/appButton';
import { Colors } from '../../constants/colores';
import { Spacing, BorderRadius } from '../../constants/sizes';

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * PermissionDeniedCard — tarjeta de error cuando el permiso de cámara fue denegado.
 *
 * Muestra el problema claramente, explica por qué se necesita el permiso,
 * y ofrece una acción directa para resolverlo.
 *
 * 'app-settings:' es el deep-link universal (iOS + Android) para abrir
 * directamente la pantalla de permisos de la app en ajustes del sistema.
 */
export const PermissionDeniedCard: React.FC = () => {
  const openSettings = () => openURL('app-settings:');

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.iconWrapper}>
        <AppIcon name="camera-outline" size="lg" color={Colors.error} />
      </View>

      <View style={styles.textGroup}>
        <AppText variant="subtitle">Acceso a cámara denegado</AppText>
        <AppText variant="body" color="secondary" style={styles.description}>
          Esta aplicación necesita acceso a tu cámara para poder escanear
          códigos QR y de barras.
        </AppText>
      </View>

      {/* Steps */}
      <View style={styles.steps}>
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
  <View style={stepStyles.row}>
    <View style={stepStyles.numberBadge}>
      <AppText variant="label" color="accent" style={{ fontSize: 10 }}>
        {number}
      </AppText>
    </View>
    <AppText variant="body" color="secondary" style={stepStyles.text}>
      {text}
    </AppText>
  </View>
);

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surfaceElevated,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    gap: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(248,113,113,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGroup: {
    gap: Spacing.xs,
  },
  description: {
    lineHeight: 22,
  },
  steps: {
    gap: Spacing.sm,
  },
});

const stepStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  numberBadge: {
    width: 22,
    height: 22,
    borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(232,255,71,0.12)',
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  text: {
    flex: 1,
    lineHeight: 20,
  },
});