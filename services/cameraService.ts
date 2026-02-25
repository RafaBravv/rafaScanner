import { PermissionResponse } from 'expo-camera';
import { PermissionStatus } from '../types';

export const CameraService = {
  /**
   * Convierte la respuesta del hook al tipo interno PermissionStatus.
   */
  parseStatus(response: PermissionResponse | null): PermissionStatus {
    if (!response) return 'undetermined';
    return response.status as PermissionStatus;
  },

  /**
   * Retorna true si el permiso fue otorgado.
   */
  isGranted(response: PermissionResponse | null): boolean {
    return response?.granted === true;
  },

  /**
   * Retorna true si el permiso fue denegado definitivamente
   * (el usuario presionó "No permitir nunca" o revocó desde ajustes).
   */
  isDeniedPermanently(response: PermissionResponse | null): boolean {
    if (!response) return false;
    return !response.granted && !response.canAskAgain;
  },
};