# Guía de Estilo para Three.js con Next.js

## Estructura de Archivos

```
src/
├── app/                  # Componentes de Next.js App Router
│   ├── page.tsx          # Página principal
│   ├── page.module.css   # Estilos modulares para la página principal
│   ├── layout.tsx        # Layout principal
│   ├── layout.module.css # Estilos modulares para el layout
│   └── globals.css       # Estilos globales
├── components/           # Componentes reutilizables
│   ├── index.ts         # Archivo de barril para exportaciones
│   ├── Scene/           # Carpeta del componente Scene
│   │   ├── Scene.tsx    # Componente principal
│   │   └── Scene.module.css  # Estilos modulares
│   ├── TestCube/        # Carpeta del componente TestCube
│   │   ├── TestCube.tsx # Componente principal
│   │   └── TestCube.module.css  # Estilos modulares
│   └── ui/              # Componentes de interfaz de usuario
│       ├── index.ts     # Archivo de barril para componentes UI
│       └── Button/
│           ├── Button.tsx
│           └── Button.module.css
├── config/               # Configuración centralizada
├── hooks/                # Hooks personalizados
├── lib/                  # Utilidades y funciones auxiliares
└── types/                # Tipos TypeScript adicionales
```

## Convenciones de Nombrado

### Archivos y Directorios
- **Carpetas de Componentes**: PascalCase (ej. `Scene/`, `TestCube/`)
- **Archivos de Componentes**: PascalCase (ej. `Scene.tsx`, `TestCube.tsx`)
- **Archivos CSS Modulares**: PascalCase.module.css (ej. `Scene.module.css`, `TestCube.module.css`)
- **Archivos de Barril**: index.ts (solo en la raíz de components y en subcarpetas como ui)
- **Utilidades y Hooks**: camelCase (ej. `useThreeSetup.ts`, `formatVector.ts`)
- **Tipos y Interfaces**: PascalCase (ej. `SceneConfig.ts`, `ObjectTypes.ts`)
- **Constantes**: UPPER_SNAKE_CASE (ej. `MAX_DISTANCE`, `DEFAULT_COLOR`)

### Estructura de Componentes

```tsx
// components/Scene/Scene.tsx
import styles from './Scene.module.css';

export function Scene() {
  return <div className={styles.container}>Contenido</div>;
}

// components/Scene/Scene.module.css
.container {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: black;
}
```

### Archivo de Barril Principal

```tsx
// components/index.ts
export { Scene } from './Scene/Scene';
export { TestCube } from './TestCube/TestCube';
export { Button } from './ui/Button/Button';
```

### Componentes

```tsx
// ✅ Correcto
export function Scene() {
  return <div>Contenido</div>;
}

// ❌ Incorrecto
export default function Scene() {
  return <div>Contenido</div>;
}
```

### Variables y Funciones

```tsx
// ✅ Correcto
const handleClick = () => {};
const calculatePosition = () => {};

// ❌ Incorrecto
const HandleClick = () => {};
const calculate_position = () => {};
```

## Estilo de Código

### Importaciones

```tsx
// ✅ Correcto
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SCENE_CONFIG } from '@/config';

// ❌ Incorrecto
import * as React from 'react';
import { Canvas, OrbitControls } from '@react-three/fiber';
```

### Estilos CSS

```css
/* ✅ Correcto - Usar CSS puro en archivos modulares */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.primary {
  background-color: #3B82F6;
  color: white;
  border: none;
}

/* ❌ Incorrecto - Usar @apply con Tailwind en archivos modulares */
.button {
  @apply px-4 py-2 rounded font-medium cursor-pointer transition-all duration-200 ease-in-out;
}

.primary {
  @apply bg-blue-500 text-white border-none;
}
```

### Páginas y Layouts

```tsx
// ✅ Correcto - Usar estilos modulares con CSS puro
// app/page.tsx
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Título</h1>
      <div className={styles.content}>
        Contenido
      </div>
    </main>
  );
}

// app/page.module.css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #F3F4F6;
}

.title {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 2rem;
}

.content {
  width: 100%;
  max-width: 64rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

// ❌ Incorrecto - Usar clases de Tailwind directamente en el JSX
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Título</h1>
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        Contenido
      </div>
    </main>
  );
}
```

### Componentes Three.js

```tsx
// ✅ Correcto
export function TestCube() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
    }
  });
  
  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

// ❌ Incorrecto
export default function TestCube() {
  const meshRef = useRef();
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
  });
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
```

### Hooks Personalizados

```tsx
// ✅ Correcto
export function useThreeSetup() {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Lógica de inicialización
    setIsReady(true);
    
    return () => {
      // Limpieza
    };
  }, []);
  
  return { isReady };
}

// ❌ Incorrecto
export function useThreeSetup() {
  let isReady = false;
  
  // Lógica sin useEffect
  isReady = true;
  
  return { isReady };
}
```

## Mejores Prácticas

### Rendimiento

1. **Usar `useCallback` y `useMemo`**:
   ```tsx
   const handleClick = useCallback(() => {
     // Lógica
   }, [dependencies]);
   
   const calculatedValue = useMemo(() => {
     return expensiveCalculation(props);
   }, [props]);
   ```

2. **Optimizar renderizado**:
   ```tsx
   // ✅ Correcto
   const MeshComponent = memo(function MeshComponent({ position, color }) {
     return (
       <mesh position={position}>
         <boxGeometry />
         <meshStandardMaterial color={color} />
       </mesh>
     );
   });
   
   // ❌ Incorrecto
   function MeshComponent({ position, color }) {
     return (
       <mesh position={position}>
         <boxGeometry />
         <meshStandardMaterial color={color} />
       </mesh>
     );
   }
   ```

### Manejo de Estado

1. **Usar contextos para estado global**:
   ```tsx
   // ✅ Correcto
   const ThreeContext = createContext<ThreeContextType | null>(null);
   
   export function ThreeProvider({ children }: { children: React.ReactNode }) {
     const [state, setState] = useState<ThreeState>(initialState);
     
     return (
       <ThreeContext.Provider value={{ state, setState }}>
         {children}
       </ThreeContext.Provider>
     );
   }
   ```

2. **Evitar prop drilling**:
   ```tsx
   // ✅ Correcto
   function Parent() {
     return (
       <ThreeProvider>
         <Child />
       </ThreeProvider>
     );
   }
   
   // ❌ Incorrecto
   function Parent() {
     const [state, setState] = useState(initialState);
     return <Child state={state} setState={setState} />;
   }
   ```

## Documentación

### Comentarios

```tsx
/**
 * Componente que renderiza un cubo 3D con animación
 * @param {Object} props - Propiedades del componente
 * @param {string} props.color - Color del cubo
 * @param {number} props.rotationSpeed - Velocidad de rotación
 */
export function TestCube({ color = 'orange', rotationSpeed = 0.5 }) {
  // Implementación
}
```

### README de Componentes

Cada componente complejo debe tener un archivo README.md con:
- Descripción del componente
- Props y tipos
- Ejemplos de uso
- Consideraciones de rendimiento

## Pruebas

- Usar Jest y React Testing Library
- Crear pruebas unitarias para hooks y utilidades
- Crear pruebas de integración para componentes complejos
- Simular interacciones de usuario con Three.js 