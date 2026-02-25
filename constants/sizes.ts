export const Spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  } as const;
  
  export const FontSize = {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 18,
    xl: 24,
    xxl: 32,
    xxxl: 42,
  } as const;
  
  export const FontWeight = {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  };
  
  export const BorderRadius = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  } as const;
  
  export const IconSize = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  } as const;
  
  export const ButtonSize = {
    height: 56,
    minWidth: 200,
  } as const;
  
  export const ScannerSize = {
    viewfinder: 260,
    cornerLength: 24,
    cornerWidth: 3,
  } as const;