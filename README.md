# Delicias de Mar — Sitio Vitrina

Prototipo de sitio web para **Delicias de Mar**, una pescadería ubicada en Argentina. El sitio funciona como catálogo digital: muestra el catálogo de productos organizados por categoría y permite a los clientes consultar disponibilidad directamente por WhatsApp. No tiene carrito ni checkout.

## Stack

- **Next.js 16** con App Router y React 19
- **TypeScript** en modo estricto
- **Tailwind CSS v4** + **shadcn/ui** (Radix UI bajo el capó)
- **Sanity CMS v5** para gestión de imágenes en la nube
- **Lucide React** para íconos

## Estructura de páginas

```
/                     → Landing con hero, categorías y beneficios
/productos            → Overview de las 4 categorías
/productos/pescados   → Overview con links a subcategorías
  /frescos            → Pescados frescos y combos
  /mariscos           → Mariscos por kilo y por unidad
/productos/congelados → Tabs: Merluza · Pollo · Bocaditos
/productos/cocina     → Tabs: Sushi · Empanadas · Paella · Tartas · Ensaladas · Platos
/productos/almacen    → Tabs: Salsas · Conservas · Sushi · Arroces · Especias · Vinos
/nosotros             → Historia y equipo
/contacto             → Datos de contacto y mapa
/ui-kit               → Referencia de componentes y tokens de diseño
```

## Catálogo de productos

Los 174 productos del sitio provienen de un Excel de inventario interno (`Productos.xlsx`). Se aplicaron dos filtros:

- **Columna X = "S"** → producto activo (no de baja)
- **Columna Z = "S"** → habilitado para publicar en la web

El resultado está tipado y organizado en `lib/products.ts`, que exporta arrays por subcategoría y un objeto `categoryTree` que usan las páginas directamente. No hay base de datos ni API intermedia: el catálogo es estático y se actualiza editando ese archivo.

```ts
// lib/products.ts
export const categoryTree = {
  pescados: { subcategories: [pescadosFrescos, mariscos] },
  congelados: { subcategories: [merluza, pollo, bocaditos] },
  cocina: { subcategories: [sushi, empanadas, paella, tartas, ensaladas, platos] },
  almacen: { subcategories: [salsas, conservas, sushiAlmacen, arroces, especias, vinos] },
}
```

## Integración con Sanity CMS

Las imágenes de categorías y banners se gestionan desde **Sanity Studio** (`studio-prueba-de-contenido-web/`), un proyecto separado que corre en `localhost:3333`.

El diseño de la integración prioriza el desacoplamiento:

- La conexión se configura con **una sola variable de entorno** (`NEXT_PUBLIC_SANITY_PROJECT_ID` en `.env.local`). Cambiar de cuenta Sanity es editar esa línea.
- Toda la lógica de Sanity vive en `lib/sanity/` y nunca se importa directamente desde componentes.
- `getSiteImages()` siempre devuelve un mapa `clave → URL` con strings planos. Los componentes no saben si la URL viene de Sanity o del sistema de archivos local.
- Si Sanity no está configurado o falla, el sitio **cae silenciosamente a imágenes locales** en `public/images/`.

```ts
// lib/sanity/queries.ts — patrón de fallback
export async function getSiteImages(): Promise<SiteImageMap> {
  const map = { ...LOCAL_FALLBACKS } // siempre partimos de los locales

  if (!isSanityEnabled) return map

  try {
    const docs = await sanityClient.fetch(query)
    for (const doc of docs) {
      if (doc.clave && doc.imagen) {
        map[doc.clave] = urlFor(doc.imagen).width(1920).auto("format").url()
      }
    }
  } catch {
    console.warn("[Sanity] Usando fallbacks locales.")
  }

  return map
}
```

Las páginas de categoría son **Server Components** que llaman a `getSiteImages()` en el servidor y pasan la URL resuelta como prop al componente de UI:

```ts
// app/productos/almacen/page.tsx
export default async function AlmacenPage() {
  const images = await getSiteImages()
  return <CategoryTabs image={images[IMAGE_KEYS.CATEGORIA_ALMACEN]} ... />
}
```

## Componente CategoryTabs

`components/category-tabs.tsx` es el componente central de las páginas de catálogo. Recibe un array de subcategorías con sus productos y renderiza:

- Un **header con imagen de fondo** (de Sanity o local) con overlay oscuro, o un header sólido si no hay imagen.
- Una **barra de tabs sticky** para navegar entre subcategorías.
- Una **grilla de ProductCards**, cada una con el nombre del producto y un botón que abre WhatsApp con un mensaje pre-armado.

```ts
interface CategoryTabsProps {
  title: string
  subtitle: string
  subcategories: ProductSubcategory[]
  whatsappPrefix?: string
  icon?: ReactNode
  image?: string
}
```

## Variables de entorno

```env
# .env.local (no se versiona)
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

El archivo `.env.example` en el repositorio sirve de plantilla. Sin `NEXT_PUBLIC_SANITY_PROJECT_ID`, el sitio funciona completamente con imágenes locales.

## Desarrollo local

```bash
# Sitio web
cd delicias-de-mar-prototipo
npm install
npm run dev          # http://localhost:3000

# Sanity Studio (solo para gestionar imágenes)
cd studio-prueba-de-contenido-web
npm install
npm run dev          # http://localhost:3333
```
