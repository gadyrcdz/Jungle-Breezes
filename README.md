# 🌿 Jungle Breezes | Brisas de la Jungla

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
> [Sitio desplegado]([url](https://jungle-breezes.vercel.app/)

> Un paraíso de aventura y naturaleza en Costa Rica. Descubre nuestras experiencias de canopy, puentes colgantes, paintball y más.

![image](https://github.com/user-attachments/assets/9d3d000f-4dd1-47da-a931-e960a2007695)

## 📋 Contenido

- [✨ Características](#-características)
- [🚀 Tecnologías](#-tecnologías)
- [💻 Instalación](#-instalación)
- [🌐 Multilingüe](#-multilingüe)
- [🔧 Uso](#-uso)
- [📝 Licencia](#-licencia)
- [👥 Contribuciones](#-contribuciones)

## ✨ Características

- **Diseño Responsivo**: Experiencia óptima en dispositivos móviles, tablets y desktops
- **Multilingüe**: Soporte completo para español e inglés
- **UI/UX Moderna**: Interfaz intuitiva y atractiva para los usuarios
- **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- **Arquitectura Modular**: Componentes reutilizables para fácil mantenimiento
- **SEO Friendly**: Optimizado para motores de búsqueda

## 🚀 Tecnologías

Este proyecto está desarrollado con modernas tecnologías web:

- **React**: Biblioteca JavaScript para construir interfaces de usuario
- **Next.js**: Framework de React para aplicaciones web
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework de CSS para diseño rápido y responsivo
- **Context API**: Para gestión de estado y características multilingüe

## 💻 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/your-username/Jungle-Breezes.git

# Navegar al directorio del proyecto
cd jungle-breezes

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

Visita `http://localhost:3000` para ver la aplicación en tu navegador.

## 🌐 Multilingüe

El sitio soporta completamente español e inglés mediante un sistema de traducciones basado en Context API.

```jsx
// Ejemplo de uso del sistema de traducciones
import { useLanguage } from '@/contexts/LanguageContext';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('section.title')}</h1>
      <p>{t('section.description')}</p>
      <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
        {t('section.changeLanguage')}
      </button>
    </div>
  );
}
```

## 🔧 Uso

La estructura del proyecto está organizada de la siguiente manera:

```
jungle-breezes/
├── public/           # Archivos estáticos
├── src/
│   ├── app/          # Rutas de la aplicación (Next.js App Router)
│   ├── components/   # Componentes reutilizables
│   ├── contexts/     # Context API (incluido LanguageContext)
│   ├── styles/       # Estilos globales
│   └── types/        # Definiciones de TypeScript
├── .env              # Variables de entorno (crear desde .env.example)
└── ...
```

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Contribuciones

Las contribuciones son bienvenidas! Por favor, lee primero las [guías de contribución](CONTRIBUTING.md).

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

---

Desarrollado con ❤️ por [Gadyr Calderón Díaz](https://github.com/gadyrcdz)
