import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
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
import { camaraOrganismStyles } from '../../constants/styles';

export const CameraOrganism: React.FC = () => {
  const { status, checkPermission } = useCameraPermission();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  if (status === null) return null;

  if (status === 'denied') {
    return (
      <View
        style={[
          camaraOrganismStyles.deniedContainer,
          { paddingTop: insets.top + Spacing.lg },
        ]}
      >
        <PermissionDeniedCard />
      </View>
    );
  }

  return (
    <View style={camaraOrganismStyles.container}>
      <CameraView style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} facing="back" />

      <View style={camaraOrganismStyles.overlay} />

      <View style={[camaraOrganismStyles.header, { paddingTop: insets.top + Spacing.sm }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={camaraOrganismStyles.backBtn}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <AppIcon name="chevron-back" size="md" color={Colors.textPrimary} />
        </TouchableOpacity>
        <AppText variant="label" color="secondary">
          Escanear código
        </AppText>
        <View style={{ width: 40 }} />
      </View>

      <View style={camaraOrganismStyles.viewfinderWrapper}>
        <ScannerViewfinder />
        <AppText variant="caption" color="secondary" style={camaraOrganismStyles.hint}>
          Apunta al código QR o de barras
        </AppText>
      </View>
    </View>
  );
};