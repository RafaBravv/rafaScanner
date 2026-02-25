import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { AppText } from '../atoms/appText';
import { AppIcon } from '../atoms/appIcon';
import { Colors } from '../../constants/colores';
import { Spacing, BorderRadius } from '../../constants/sizes';

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * WelcomeHero — bloque principal de bienvenida en la pantalla de inicio.
 *
 * El ícono entra con un fade+slide desde abajo en el montaje,
 * como si "apareciera" del suelo al abrir la app.
 */
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
        styles.container,
        { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
      ]}
    >
      {/* Ícono con fondo */}
      <View style={styles.iconWrapper}>
        <AppIcon name="scan-outline" size="xl" color={Colors.primary} />
      </View>

      {/* Títulos */}
      <View style={styles.textGroup}>
        <AppText variant="display" style={styles.title}>
          QR{'\n'}Scanner
        </AppText>
        <AppText variant="body" color="secondary" style={styles.subtitle}>
          Escanea códigos QR y de barras{'\n'}de forma rápida y sencilla.
        </AppText>
      </View>

      {/* Feature pills */}
      <View style={styles.pills}>
        <FeaturePill icon="flash-outline"    label="Instantáneo" />
        <FeaturePill icon="shield-checkmark-outline" label="Sin internet" />
        <FeaturePill icon="copy-outline"     label="Copia fácil" />
      </View>
    </Animated.View>
  );
};

// ─── Sub-component ────────────────────────────────────────────────────────────

type IoniconName = React.ComponentProps<typeof AppIcon>['name'];

interface FeaturePillProps {
  icon: IoniconName;
  label: string;
}

const FeaturePill: React.FC<FeaturePillProps> = ({ icon, label }) => (
  <View style={pillStyles.container}>
    <AppIcon name={icon} size="sm" color={Colors.textSecondary} />
    <AppText variant="caption" color="secondary">
      {label}
    </AppText>
  </View>
);

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    gap: Spacing.xl,
  },
  iconWrapper: {
    width: 72,
    height: 72,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.surfaceElevated,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGroup: {
    gap: Spacing.sm,
  },
  title: {
    color: Colors.textPrimary,
  },
  subtitle: {
    lineHeight: 24,
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
});

const pillStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    backgroundColor: Colors.surfaceElevated,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 5,
  },
});