// src/services/api.ts

// Lee la URL del backend desde .env; si no existe, usa el fallback local.
export const API_BASE_URL: string =
  (import.meta.env.VITE_API_URL as string) || 'http://localhost:3001/api';

// Opciones de petición con tipado correcto (evita el error de 'headers').
export interface ApiRequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

// Helper genérico para hacer peticiones JSON de forma limpia.
export const apiRequest = async <T = unknown>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Error HTTP: ${response.status}`);
  }

  return response.json() as Promise<T>;
};