import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { appTextVariantStyles, appTextColorMap } from '../../constants/styles';

// ─── Types ────────────────────────────────────────────────────────────────────

export type TextVariant =
  | 'display'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'label'
  | 'mono';

export type TextColor = 'primary' | 'secondary' | 'accent' | 'inverse' | 'success' | 'error' | 'warning';

export interface AppTextProps extends TextProps {
  variant?: TextVariant;
  color?: TextColor;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  color = 'primary',
  style,
  ...props
}) => (
  <RNText
    style={[appTextVariantStyles[variant], { color: appTextColorMap[color] }, style]}
    {...props}
  />
);