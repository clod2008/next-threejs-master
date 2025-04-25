/**
 * Tipos para la configuración del proyecto
 */

// Tipos para la configuración de la aplicación
export interface AppConfig {
  name: string;
  version: string;
  description: string;
  author: string;
  repository: string;
}

// Tipos para la configuración de la cámara
export interface CameraConfig {
  position: [number, number, number];
  fov: number;
  near: number;
  far: number;
}

// Tipos para la configuración de iluminación
export interface LightingConfig {
  ambient: {
    intensity: number;
    color: string;
  };
  directional: {
    position: [number, number, number];
    intensity: number;
    color: string;
    castShadow: boolean;
    shadowMapSize: [number, number];
  };
}

// Tipos para la configuración de controles
export interface ControlsConfig {
  orbitControls: {
    minDistance: number;
    maxDistance: number;
    enableDamping: boolean;
    dampingFactor: number;
  };
  transformControls: {
    mode: 'translate' | 'rotate' | 'scale';
    size: number;
  };
}

// Tipos para la configuración de la cuadrícula
export interface GridConfig {
  infiniteGrid: boolean;
  cellSize: number;
  cellThickness: number;
  cellColor: string;
  sectionSize: number;
  sectionThickness: number;
  sectionColor: string;
  fadeDistance: number;
  fadeStrength: number;
  followCamera: boolean;
}

// Tipos para la configuración del ambiente
export interface EnvironmentConfig {
  preset: string;
  background: string;
}

// Tipos para la configuración de la escena
export interface SceneConfig {
  camera: CameraConfig;
  lighting: LightingConfig;
  controls: ControlsConfig;
  grid: GridConfig;
  environment: EnvironmentConfig;
}

// Tipos para la configuración de objetos 3D
export interface ObjectConfig {
  size: number;
  color: string;
  rotationSpeed: number;
  castShadow: boolean;
  receiveShadow: boolean;
}

export interface ObjectsConfig {
  [key: string]: ObjectConfig;
}

// Tipos para la configuración de la interfaz de usuario
export interface LayoutConfig {
  header: {
    height: string;
    backgroundColor: string;
    shadow: boolean;
  };
  sidebar: {
    width: {
      mobile: string;
      desktop: string;
    };
    backgroundColor: string;
    shadow: boolean;
  };
  footer: {
    height: string;
    backgroundColor: string;
    shadow: boolean;
  };
  canvas: {
    width: {
      mobile: string;
      desktop: string;
    };
    height: {
      mobile: string;
      desktop: string;
    };
  };
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    textLight: string;
  };
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
}

export interface UIConfig {
  layout: LayoutConfig;
  theme: ThemeConfig;
}

// Tipos para la configuración de rendimiento
export interface PerformanceConfig {
  stats: boolean;
  dpr: [number, number];
  antialias: boolean;
  shadows: boolean;
}

// Tipos para la configuración de desarrollo
export interface DevConfig {
  debug: boolean;
  showHelpers: boolean;
  showStats: boolean;
} 