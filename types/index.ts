// ─── Permission ────────────────────────────────────────────────────────────────
export type PermissionStatus = 'granted' | 'denied' | 'undetermined';

export interface PermissionState {
  camera: PermissionStatus;
}

// ─── Scanner ────────────────────────────────────────────────────────────────────
export type ScanMode = 'qr' | 'barcode' | 'all';

export interface ScanResult {
  type: string;
  data: string;
  timestamp: number;
}

// ─── Navigation ─────────────────────────────────────────────────────────────────
export type TabRoute = 'index' | 'camera';

// ─── UI Components ───────────────────────────────────────────────────────────────
export interface ButtonVariant {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}