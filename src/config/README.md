# Configuración del Proyecto Three.js con Next.js

Este directorio contiene la configuración global del proyecto Three.js con Next.js.

## Estructura

- `settings.ts`: Contiene todas las configuraciones del proyecto
- `types.ts`: Define los tipos TypeScript para la configuración
- `index.ts`: Exporta la configuración para su uso en el proyecto

## Uso

Para utilizar la configuración en cualquier componente:

```typescript
import { SCENE_CONFIG, UI_CONFIG } from '@/config';

// Ejemplo de uso
const { camera, lighting } = SCENE_CONFIG;
const { layout, theme } = UI_CONFIG;
```

## Secciones de Configuración

### APP_CONFIG
Configuración general de la aplicación como nombre, versión, descripción, etc.

### SCENE_CONFIG
Configuración de la escena 3D, incluyendo:
- Cámara
- Iluminación
- Controles
- Cuadrícula
- Ambiente

### OBJECTS_CONFIG
Configuración de los objetos 3D en la escena.

### UI_CONFIG
Configuración de la interfaz de usuario, incluyendo:
- Layout (header, sidebar, footer, canvas)
- Tema (colores, fuentes)

### PERFORMANCE_CONFIG
Configuración de rendimiento como DPR, antialiasing, sombras, etc.

### DEV_CONFIG
Configuración específica para desarrollo como modo debug, helpers, etc.

## Extensión

Para agregar nuevas configuraciones:

1. Añade la configuración en `settings.ts`
2. Define los tipos correspondientes en `types.ts`
3. Exporta la configuración en `index.ts`

## Mejores Prácticas

- Mantén la configuración centralizada en este directorio
- Utiliza los tipos definidos para garantizar la consistencia
- Documenta cualquier cambio significativo en la configuración
- Considera usar variables de entorno para configuraciones sensibles 