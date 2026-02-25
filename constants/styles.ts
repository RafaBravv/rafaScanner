import { StyleSheet } from 'react-native';
import { Colors } from './colores';
import { Spacing, BorderRadius, FontSize, FontWeight, ButtonSize, ScannerSize } from './sizes';

// ─── AppButton ────────────────────────────────────────────────────────────────

export const appButtonStyles = StyleSheet.create({
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

export const appButtonSizeStyles = {
  sm: { height: 40,                paddingHorizontal: Spacing.md },
  md: { height: ButtonSize.height, paddingHorizontal: Spacing.xl },
  lg: { height: 64,                paddingHorizontal: Spacing.xxl },
} as const;

// ─── AppText ──────────────────────────────────────────────────────────────────

export const appTextVariantStyles = {
  display:  { fontSize: FontSize.xxxl, fontWeight: FontWeight.bold,     letterSpacing: -1.5, lineHeight: 46 },
  title:    { fontSize: FontSize.xxl,  fontWeight: FontWeight.bold,     letterSpacing: -0.5, lineHeight: 38 },
  subtitle: { fontSize: FontSize.lg,   fontWeight: FontWeight.medium,   letterSpacing: 0,    lineHeight: 26 },
  body:     { fontSize: FontSize.md,   fontWeight: FontWeight.regular,  letterSpacing: 0,    lineHeight: 22 },
  caption:  { fontSize: FontSize.sm,   fontWeight: FontWeight.regular,  letterSpacing: 0,    lineHeight: 18 },
  label:    { fontSize: FontSize.xs,   fontWeight: FontWeight.semibold, letterSpacing: 1.2,  lineHeight: 16, textTransform: 'uppercase' as const },
  mono:     { fontSize: FontSize.md,   fontWeight: FontWeight.medium,   letterSpacing: 0.5,  lineHeight: 22, fontFamily: 'monospace' },
} as const;

export const appTextColorMap: Record<string, string> = {
  primary:   Colors.textPrimary,
  secondary: Colors.textSecondary,
  accent:    Colors.primary,
  inverse:   Colors.textInverse,
  success:   Colors.success,
  error:     Colors.error,
  warning:   Colors.warning,
};

// ─── PermissionDeniedCard ─────────────────────────────────────────────────────

export const permissionDeniedCardStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surfaceElevated,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    gap: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(248,113,113,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGroup: {
    gap: Spacing.xs,
  },
  description: {
    lineHeight: 22,
  },
  steps: {
    gap: Spacing.sm,
  },
});

export const permissionDeniedStepStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  numberBadge: {
    width: 22,
    height: 22,
    borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(232,255,71,0.12)',
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  text: {
    flex: 1,
    lineHeight: 20,
  },
});

// ─── ScannerViewfinder ────────────────────────────────────────────────────────

const { viewfinder, cornerLength, cornerWidth } = ScannerSize;

export const scannerFinderStyles = StyleSheet.create({
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

});

// ─── WelcomeHero ──────────────────────────────────────────────────────────────

export const welcomeHeroStyles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    gap: Spacing.xl,
  },
  iconWrapper: {
    width: 72,
    height: 72,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.surfaceElevated,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGroup: {
    gap: Spacing.sm,
  },
  title: {
    color: Colors.textPrimary,
  },
  subtitle: {
    lineHeight: 24,
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
});

// ─── CamaraOrganism ───────────────────────────────────────────────────────────

export const camaraOrganismStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  deniedContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewfinderWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xl,
  },
  hint: {
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
  },
});

// ─── HomeOrganism ─────────────────────────────────────────────────────────────

export const homeOrganismStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.xl,
    justifyContent: 'space-between',
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    gap: Spacing.md,
  },
  hint: {
    textAlign: 'center',
  },
});