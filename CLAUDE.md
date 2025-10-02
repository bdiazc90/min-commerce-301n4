# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

E-commerce mínimo construido con React 19, TypeScript, Vite y TailwindCSS v4. Aplicación de carrito de compras con routing y manejo de estado mediante React Context.

## Development Commands

```bash
# Desarrollo con hot reload
npm run dev

# Build de producción (compila TypeScript y genera bundle)
npm run build

# Preview del build de producción
npm run preview

# Linting
npm run lint
```

## Architecture

### Routing Structure
- Usa `react-router-dom` v7 con `createBrowserRouter`
- Layout principal en `App.tsx` con navegación compartida
- Rutas:
  - `/` - HomePage (lista de productos)
  - `/cart` - CartPage (vista del carrito)
  - `/checkout` - CheckoutPage (proceso de compra)

### State Management
- **Cart Context** (`src/contexts/cartContext.ts`): Manejo global del carrito de compras
  - Provider: `CartProvider`
  - Hook: `useCart()`
  - Estado: array de `CartItem[]`
  - Funciones: `addToCart(product)`

### Project Structure
```
src/
├── types/index.ts          # Interfaces globales (Product, CartItem)
├── models/                 # Data models y mock data
├── contexts/               # React contexts para estado global
├── components/             # Componentes reutilizables
├── pages/                  # Componentes de página/ruta
├── consts/                 # Constantes de la aplicación
└── utils.ts               # Funciones utilitarias
```

### TypeScript Configuration
- Usa path alias `@/*` para imports desde `src/`
- Configuración strict habilitada
- `verbatimModuleSyntax: true` - usa `type` imports cuando sea posible
- Ejemplo: `import type { Product } from '@/types'`

### Styling
- TailwindCSS v4 con plugin de Vite (`@tailwindcss/vite`)
- Clases de utilidad directamente en JSX
- Gradientes y transiciones para navegación

### Core Types
```typescript
// Product interface con soporte para ofertas
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  onSale?: boolean;
  salePrice?: number;
}

// CartItem relaciona producto con cantidad
interface CartItem {
  product: Product;
  quantity: number;
}
```

## Development Notes

- El proyecto NO usa React Compiler (por performance en dev)
- ESLint configurado con react-hooks y react-refresh plugins
- Mock data en `src/models/products.ts`
- StrictMode habilitado en desarrollo
