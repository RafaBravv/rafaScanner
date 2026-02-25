import React from 'react';
import { View } from 'react-native';
import { scannerFinderStyles } from '../../constants/styles';

export const ScannerViewfinder: React.FC = () => (
  <View style={scannerFinderStyles.viewfinder}>
    <View style={[scannerFinderStyles.corner, scannerFinderStyles.topLeft]} />
    <View style={[scannerFinderStyles.corner, scannerFinderStyles.topRight]} />
    <View style={[scannerFinderStyles.corner, scannerFinderStyles.bottomLeft]} />
    <View style={[scannerFinderStyles.corner, scannerFinderStyles.bottomRight]} />
  </View>
);