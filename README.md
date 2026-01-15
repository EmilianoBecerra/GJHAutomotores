# GJH Automotores (Proyecto Freelance)

Sitio web de venta de vehículos con catálogo de autos y camionetas, sistema de búsqueda avanzada y sección de planes de financiación.

## Descripción

GJH Automotores es una aplicación web desarrollada con React que permite a los usuarios explorar un catálogo de vehículos (autos y camionetas), buscar productos específicos mediante un sistema de búsqueda avanzada, consultar información detallada de cada vehículo y acceder a información sobre planes de financiación.

### Características principales

- **Catálogo de productos**: Visualización de autos y camionetas con información detallada
- **Búsqueda avanzada**: Sistema de búsqueda por marca, modelo y características con algoritmo de distancia de Levenshtein para sugerencias inteligentes
- **Filtros dinámicos**: Filtrado de productos por categoría (autos/camionetas)
- **Páginas de producto**: Información detallada de cada vehículo con galería de imágenes
- **Planes de financiación**: Sección dedicada a mostrar opciones de financiamiento
- **Contacto**: Información de la empresa
- **Diseño responsive**: Adaptado para dispositivos móviles y desktop

## Tecnologías utilizadas

- **React 19.2.0**: Framework principal
- **React Router DOM 7.11.0**: Navegación y enrutamiento
- **Vite 7.2.4**: Build tool y desarrollo
- **CSS**: Estilos personalizados
- **GitHub Pages**: Deployment
- **Google Sheets**: Como base de datos
- **Sheet Best**: Para crear una API de consulta al google sheets.
- **Cloudinary**: Para almacenar las imagenes en una nube y consultar mediante links.

## Estructura del proyecto

```
GJHAutomotores/
├── src/
│   ├── components/
│   │   ├── header/          # Componente del header
│   │   ├── footer/          # Componente del footer
│   │   ├── Link/            # Componentes de enlaces
│   │   ├── searchForm/    # Formulario de búsqueda
│   │   ├── inputFilter/     # Filtros de productos
│   │   ├── error/           # Componentes de error
│   │   └── main/            # Componentes principales
│   │       ├── welcome/     # Página de bienvenida
│   │       ├── products/    # Listado de productos
│   │           ├── productDetail/     # Detalle del producto
│   │       ├── financing/   # Planes de financiación
│   │       └── contact/     # Página de contacto
│   ├── utils/               # Utilidades (algoritmo Levenshtein, etc.)
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada
├── public/                  # Archivos públicos
├── .env.example             # Variables de entorno de ejemplo
└── package.json             # Dependencias y scripts
```

## Rutas de la aplicación

- `/` - Página de bienvenida
- `/productos/auto` - Catálogo de autos
- `/productos/camioneta` - Catálogo de camionetas
- `/productos/auto/:carId` - Detalle de un auto específico
- `/productos/camioneta/:carId` - Detalle de una camioneta específica
- `/planes` - Planes de financiación
- `/nosotros` - Información de contacto

## Funcionalidades destacadas

### Sistema de búsqueda
El proyecto implementa un sistema de búsqueda inteligente que utiliza el algoritmo de distancia de Levenshtein para sugerir resultados similares cuando no hay coincidencias exactas. Esto mejora significativamente la experiencia del usuario al buscar vehículos.

## Autor

**Emiliano Becerra**
- GitHub: [@EmilianoBecerra](https://github.com/EmilianoBecerra)

## Licencia

Este proyecto es privado y no tiene una licencia pública.