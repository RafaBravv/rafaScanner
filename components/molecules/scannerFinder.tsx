import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/colores';
import { ScannerSize } from '@/constants/sizes'

/**
 * Viewfinder con línea de escaneo animada.
 * Piénsalo como el "marco de un cuadro" que le dice al usuario
 * dónde debe colocar el código para escanearlo.
 */
export const ScannerViewfinder: React.FC = () => {
  const scanLineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(scanLineAnim, {
          toValue: ScannerSize.viewfinder - 4,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(scanLineAnim, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: true,
        }),
      ]).start(animate);
    };
    animate();
  }, [scanLineAnim]);

  return (
    <View style={styles.viewfinder}>
      {/* Corners */}
      <View style={[styles.corner, styles.topLeft]} />
      <View style={[styles.corner, styles.topRight]} />
      <View style={[styles.corner, styles.bottomLeft]} />
      <View style={[styles.corner, styles.bottomRight]} />

      {/* Scan line */}
      <Animated.View
        style={[
          styles.scanLine,
          { transform: [{ translateY: scanLineAnim }] },
        ]}
      />
    </View>
  );
};

const { viewfinder, cornerLength, cornerWidth } = ScannerSize;

const styles = StyleSheet.create({
  viewfinder: {
    width: viewfinder,
    height: viewfinder,
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: cornerLength,
    height: cornerLength,
    borderColor: Colors.scannerCorner,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: cornerWidth,
    borderLeftWidth: cornerWidth,
    borderTopLeftRadius: 4,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: cornerWidth,
    borderRightWidth: cornerWidth,
    borderTopRightRadius: 4,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: cornerWidth,
    borderLeftWidth: cornerWidth,
    borderBottomLeftRadius: 4,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: cornerWidth,
    borderRightWidth: cornerWidth,
    borderBottomRightRadius: 4,
  },
  scanLine: {
    position: 'absolute',
    top: 2,
    left: 8,
    right: 8,
    height: 2,
    backgroundColor: Colors.scannerLine,
    borderRadius: 1,
  },
});