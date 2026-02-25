export const Colors = {
    // Base
    background: '#0A0A0A',
    surface: '#141414',
    surfaceElevated: '#1E1E1E',
  
    // Brand
    primary: '#E8FF47',       // neon-lime accent
    primaryMuted: '#C8DF2A',
  
    // Text
    textPrimary: '#F5F5F5',
    textSecondary: '#8A8A8A',
    textInverse: '#0A0A0A',
  
    // Feedback
    success: '#4ADE80',
    error: '#F87171',
    warning: '#FBBF24',
  
    // Borders / Overlays
    border: '#2A2A2A',
    overlay: 'rgba(0,0,0,0.6)',
  
    // Scanner
    scannerCorner: '#E8FF47',
    scannerLine: 'rgba(232,255,71,0.7)',
  
    // Transparent
    transparent: 'transparent',
  } as const;
  
  export type ColorKey = keyof typeof Colors;