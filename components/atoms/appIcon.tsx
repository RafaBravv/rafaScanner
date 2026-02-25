import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colores';
import { IconSize } from '../../constants/sizes';

// ─── Types ────────────────────────────────────────────────────────────────────

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

export interface AppIconProps {
  name: IoniconName;
  size?: keyof typeof IconSize;
  /** Acepta string directo o clave del sistema de colores */
  color?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const AppIcon: React.FC<AppIconProps> = ({
  name,
  size = 'md',
  color = Colors.textPrimary,
}) => (
  <Ionicons name={name} size={IconSize[size]} color={color} />
);