import React, { useRef } from 'react';
import { TouchableOpacity, ActivityIndicator, ViewStyle, Animated } from 'react-native';
import { AppText } from './appText';
import { Colors } from '../../constants/colores';
import { FontSize, FontWeight } from '../../constants/sizes';
import { ButtonVariant } from '../../types/index';
import { appButtonStyles, appButtonSizeStyles } from '../../constants/styles';

interface AppButtonProps extends ButtonVariant {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
}

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

  const textColor = variant === 'primary' ? 'inverse' : 'accent';

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, fullWidth && appButtonStyles.fullWidth]}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={isDisabled}
        activeOpacity={1}
        style={[
          appButtonStyles.base,
          appButtonStyles[variant],
          appButtonSizeStyles[size],
          fullWidth && appButtonStyles.fullWidth,
          isDisabled && appButtonStyles.disabled,
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