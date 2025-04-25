/**
 * Configuración global del proyecto Three.js con Next.js
 */

// Configuración de la aplicación
export const APP_CONFIG = {
  name: 'Three.js Next.js Demo',
  version: '1.0.0',
  description: 'Aplicación de demostración de Three.js con Next.js 15',
  author: 'Tu Nombre',
  repository: 'https://github.com/tu-usuario/three-next-15',
};

// Configuración de la escena 3D
export const SCENE_CONFIG = {
  // Configuración de la cámara
  camera: {
    position: [5, 5, 5],
    fov: 75,
    near: 0.1,
    far: 1000,
  },
  
  // Configuración de iluminación
  lighting: {
    ambient: {
      intensity: 0.5,
      color: '#ffffff',
    },
    directional: {
      position: [10, 10, 5],
      intensity: 1,
      color: '#ffffff',
      castShadow: true,
      shadowMapSize: [1024, 1024],
    },
  },
  
  // Configuración de controles
  controls: {
    orbitControls: {
      minDistance: 3,
      maxDistance: 10,
      enableDamping: true,
      dampingFactor: 0.05,
    },
    transformControls: {
      mode: 'translate', // 'translate', 'rotate', 'scale'
      size: 1,
    },
  },
  
  // Configuración de la cuadrícula
  grid: {
    infiniteGrid: true,
    cellSize: 1,
    cellThickness: 0.5,
    cellColor: '#6f6f6f',
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: '#9d4b4b',
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
  },
  
  // Configuración del ambiente
  environment: {
    preset: 'city', // 'sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'
    background: '#f0f0f0',
  },
};

// Configuración de los objetos 3D
export const OBJECTS_CONFIG = {
  cube: {
    size: 1,
    color: 'orange',
    rotationSpeed: 0.5,
    castShadow: true,
    receiveShadow: true,
  },
  // Aquí puedes agregar más objetos
};

// Configuración de la interfaz de usuario
export const UI_CONFIG = {
  layout: {
    header: {
      height: '64px',
      backgroundColor: '#ffffff',
      shadow: true,
    },
    sidebar: {
      width: {
        mobile: '100%',
        desktop: '33.333%',
      },
      backgroundColor: '#ffffff',
      shadow: true,
    },
    footer: {
      height: '48px',
      backgroundColor: '#ffffff',
      shadow: true,
    },
    canvas: {
      width: {
        mobile: '100%',
        desktop: '66.667%',
      },
      height: {
        mobile: '60vh',
        desktop: '100vh',
      },
    },
  },
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#10b981',
      background: '#f3f4f6',
      text: '#1f2937',
      textLight: '#6b7280',
    },
    fonts: {
      heading: 'var(--font-geist-sans)',
      body: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
    },
  },
};

// Configuración de rendimiento
export const PERFORMANCE_CONFIG = {
  stats: true,
  dpr: [1, 2], // Device Pixel Ratio
  antialias: true,
  shadows: true,
};

// Configuración de desarrollo
export const DEV_CONFIG = {
  debug: process.env.NODE_ENV === 'development',
  showHelpers: process.env.NODE_ENV === 'development',
  showStats: process.env.NODE_ENV === 'development',
}; 