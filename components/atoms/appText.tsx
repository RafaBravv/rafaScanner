import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colores';
import { FontSize, FontWeight } from '../../constants/sizes';

// ─── Types ────────────────────────────────────────────────────────────────────

export type TextVariant =
  | 'display'    // 42px bold  — títulos de pantalla grandes
  | 'title'      // 32px bold  — encabezados de sección
  | 'subtitle'   // 18px medium — subtítulos
  | 'body'       // 15px regular — texto de lectura
  | 'caption'    // 13px regular — texto auxiliar pequeño
  | 'label'      // 11px semibold uppercase — etiquetas y badges
  | 'mono';      // 15px monospace — datos escaneados (URLs, códigos)

export type TextColor = 'primary' | 'secondary' | 'accent' | 'inverse' | 'success' | 'error' | 'warning';

export interface AppTextProps extends TextProps {
  variant?: TextVariant;
  color?: TextColor;
}

// ─── Style maps ───────────────────────────────────────────────────────────────

const variantStyles: Record<TextVariant, object> = {
  display:  { fontSize: FontSize.xxxl, fontWeight: FontWeight.bold,    letterSpacing: -1.5, lineHeight: 46 },
  title:    { fontSize: FontSize.xxl,  fontWeight: FontWeight.bold,    letterSpacing: -0.5, lineHeight: 38 },
  subtitle: { fontSize: FontSize.lg,   fontWeight: FontWeight.medium,  letterSpacing: 0,    lineHeight: 26 },
  body:     { fontSize: FontSize.md,   fontWeight: FontWeight.regular, letterSpacing: 0,    lineHeight: 22 },
  caption:  { fontSize: FontSize.sm,   fontWeight: FontWeight.regular, letterSpacing: 0,    lineHeight: 18 },
  label:    { fontSize: FontSize.xs,   fontWeight: FontWeight.semibold,letterSpacing: 1.2,  lineHeight: 16, textTransform: 'uppercase' as const },
  mono:     { fontSize: FontSize.md,   fontWeight: FontWeight.medium,  letterSpacing: 0.5,  lineHeight: 22, fontFamily: 'monospace' },
};

const colorMap: Record<TextColor, string> = {
  primary:  Colors.textPrimary,
  secondary:Colors.textSecondary,
  accent:   Colors.primary,
  inverse:  Colors.textInverse,
  success:  Colors.success,
  error:    Colors.error,
  warning:  Colors.warning,
};

// ─── Component ────────────────────────────────────────────────────────────────

export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  color = 'primary',
  style,
  ...props
}) => (
  <RNText
    style={[variantStyles[variant], { color: colorMap[color] }, style]}
    {...props}
  />
);