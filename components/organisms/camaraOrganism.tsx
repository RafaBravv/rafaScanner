import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView } from 'expo-camera';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScannerViewfinder } from '../molecules/scannerFinder';
import { PermissionDeniedCard } from '../molecules/permissionDeniedCard';
import { AppIcon } from '../atoms/appIcon';
import { AppText } from '../atoms/appText';
import { useCameraPermission } from '../../hooks/useCameraPermission';
import { Colors } from '../../constants/colores';
import { Spacing } from '../../constants/sizes';

export const CameraOrganism: React.FC = () => {
  const { status, checkPermission } = useCameraPermission();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  // Mientras verificamos el estado inicial no renderizamos nada
  if (status === null) return null;

  if (status === 'denied') {
    return (
      <View
        style={[
          styles.deniedContainer,
          { paddingTop: insets.top + Spacing.lg },
        ]}
      >
        <PermissionDeniedCard />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={StyleSheet.absoluteFill} facing="back" />

      {/* Overlay oscuro para mejorar visibilidad del UI */}
      <View style={styles.overlay} />

      {/* Header con inset dinámico */}
      <View style={[styles.header, { paddingTop: insets.top + Spacing.sm }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <AppIcon name="chevron-back" size="md" color={Colors.textPrimary} />
        </TouchableOpacity>
        <AppText variant="label" color="secondary">
          Escanear código
        </AppText>
        {/* Spacer para centrar el título */}
        <View style={{ width: 40 }} />
      </View>

      {/* Visor centrado */}
      <View style={styles.viewfinderWrapper}>
        <ScannerViewfinder />
        <AppText variant="caption" color="secondary" style={styles.hint}>
          Apunta al código QR o de barras
        </AppText>
      </View>

      {/* Footer con inset dinámico */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + Spacing.xl }]}>
        <AppText variant="caption" color="secondary">
          La detección automática está activa
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  deniedContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewfinderWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xl,
  },
  hint: {
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
});