import React, { useRef } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  Animated,
} from 'react-native';
import { AppText } from './appText';
import { Colors } from '../../constants/colores';
import { Spacing, BorderRadius, FontSize, FontWeight, ButtonSize } from '../../constants/sizes';
import { ButtonVariant } from '../../types/index';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AppButtonProps extends ButtonVariant {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * AppButton — átomo de botón con feedback táctil animado.
 *
 * Analogía: piénsalo como un sello de goma — cuando lo presionas
 * se "hunde" levemente (scale) dando retroalimentación física al usuario,
 * aunque sea en una pantalla plana.
 */
export const AppButton: React.FC<AppButtonProps> = ({
  label,
  onPress,
  loading = false,
  disabled = false,
  fullWidth = false,
  variant = 'primary',
  size = 'md',
  style,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const isDisabled = disabled || loading;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 50,
      bounciness: 0,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 4,
    }).start();
  };

  const textColor = variant === 'primary' ? 'inverse' : variant === 'ghost' ? 'accent' : 'accent';

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, fullWidth && styles.fullWidth]}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={isDisabled}
        activeOpacity={1}
        style={[
          styles.base,
          styles[variant],
          sizeStyles[size],
          fullWidth && styles.fullWidth,
          isDisabled && styles.disabled,
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={variant === 'primary' ? Colors.textInverse : Colors.primary}
          />
        ) : (
          <AppText
            variant="label"
            color={textColor}
            style={{ fontSize: FontSize.sm, fontWeight: FontWeight.bold }}
          >
            {label}
          </AppText>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────

const sizeStyles = {
  sm: { height: 40,              paddingHorizontal: Spacing.md },
  md: { height: ButtonSize.height, paddingHorizontal: Spacing.xl },
  lg: { height: 64,              paddingHorizontal: Spacing.xxl },
};

const styles = StyleSheet.create({
  base: {
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: ButtonSize.minWidth,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.surfaceElevated,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  ghost: {
    backgroundColor: Colors.transparent,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  disabled: {
    opacity: 0.38,
  },
  fullWidth: {
    width: '100%',
    minWidth: undefined,
  },
});