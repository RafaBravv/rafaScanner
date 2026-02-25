import { useCallback } from 'react';
import { useCameraPermissions } from 'expo-camera';
import { CameraService } from '../services/cameraService';
import { PermissionStatus } from '../types';

interface UseCameraPermissionReturn {
  status: PermissionStatus;
  isGranted: boolean;
  isLoading: boolean;
  canAskAgain: boolean;
  requestPermission: () => Promise<boolean>;
  checkPermission: () => Promise<void>;
}

export function useCameraPermission(): UseCameraPermissionReturn {
  const [permission, requestExpoPermission] = useCameraPermissions();

  const status     = CameraService.parseStatus(permission);
  const isGranted  = CameraService.isGranted(permission);
  const canAskAgain = permission?.canAskAgain ?? true;
  const isLoading  = permission === null; // null = aún cargando el estado inicial

  /**
   * Solicita el permiso activamente. Muestra el diálogo del sistema.
   * Retorna true si fue otorgado.
   */
  const requestPermission = useCallback(async (): Promise<boolean> => {
    const response = await requestExpoPermission();
    return response?.granted === true;
  }, [requestExpoPermission]);

  /**
   * Solo verifica el estado actual sin mostrar diálogos.
   * Con useCameraPermissions el estado se sincroniza automáticamente,
   * por lo que esta función es un no-op útil como interfaz consistente.
   */
  const checkPermission = useCallback(async (): Promise<void> => {
    // El estado se actualiza automáticamente por el hook de expo-camera.
    // No se necesita acción adicional.
  }, []);

  return {
    status,
    isGranted,
    isLoading,
    canAskAgain,
    requestPermission,
    checkPermission,
  };
}