# SIAFI Website

Bienvenido al repositorio del sitio web de SIAFI. Este proyecto está desarrollado con React y Next.js, y tiene como objetivo proporcionar información sobre la Sociedad de Inteligencia Artificial y sus actividades.

Puedes ver el sitio web en acción en [siafi-unam.org](https://siafi-unam.org).

Para entrar al CMS de Sanity, ve a [siafi-unam.org/studio](https://siafi-unam.org/studio) (necesitas credenciales para acceder).

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Next.js**: Framework de React para aplicaciones web.
- **Sanity.io**: Plataforma de gestión de contenido.
- **CSS Modules**: Para el estilo de los componentes.
- **Vercel**: Plataforma de despliegue y hosting del sitio.

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/SIAFI-UNAM/siafi-website.git
   ```
2. Navega al directorio del proyecto:

    ```bash
    cd siafi-website
    ```
3. Instala las dependencias (debes tener [Node.js](https://nodejs.org/en) instalado previamente):

    ```bash
    npm install
    ```

4. Duplica el archivo `.env.example` y renombralo a `.env.local` en la raíz del proyecto.

    ```bash
    cp .env.example .env.local
    ```

5. Agrega los tokens necesarios en el archivo `.env.local`. (*Psst: Si eres un SIAFIto y quieres hacer cambios, puedes preguntarle al líder de proyectos por los tokens* 😉)

5. Ejecuta el servidor de desarrollo:

    ```bash
    npm run dev
    ```

6. Abre tu navegador y ve a http://localhost:3000 para ver el sitio web en acción.

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
siafi-website/
├── public/                 # Archivos públicos (favicon, imágenes públicas, etc.)
├── src/
│   ├── components/         # Componentes React organizados por sección o "General" para componentes reutilizables
│   ├── styles/             # Archivos de estilo (CSS Modules)
│   ├── sanity/             # Configuración, tipos de contenido y más del CMS Sanity
│   ├── assets/             # Archivos de imágenes, fuentes, etc.
│   ├── lib/                # Funciones y utilidades
│   |── app/                # App router de Next.js con layouts y rutas
        │── (sanity)        # Configuración de Sanity para la vista del CMS
        └── (webpage)       # Vistas de la página de SIAFI
│   └── image-paths.ts      # Paths de imágenes del proyecto para facilitar su uso
├── .gitignore              # Archivos y directorios ignorados por Git
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Este archivo
```

## ¿Cómo Contribuir?

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos (seas o no miembro de SIAFI):

1. Haz un fork del repositorio.
2. Crea una nueva rama siguiendo la metodología [GitFlow](https://gfourmis.co/gitflow-sin-morir-en-el-intento/). Por ejemplo: `feature/add-dark-mode`.
3. Realiza tus cambios y utiliza [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para tus mensajes de commit. (Ya es un plus si usas también [gitmoji](https://gitmoji.dev/) 😄). 
   
   > 💡 Te recomiendo esta extensión de VSCode para tus commits 👉🏼 [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
4. ⚠️ Actualiza el archivo `CHANGELOG.md` con tus cambios y si es necesario el archivo `.env.example` con el nombre de las nuevas variables de entorno.
5. Sube tus cambios a tu fork.
6. Abre un Pull Request de tu rama en tu fork a la rama `development` en este repositorio. **NO LO HAGAS A LA RAMA `main`**.
7. Los miembros de SIAFI revisarán tu Pull Request y te darán retroalimentación.
8. Una vez que tu Pull Request sea aprobado, será fusionado a la rama `development` y se desplegará en producción (main) más adelante. 🚀

## Créditos

Este proyecto fue originalmente desarrollado con ❤️ por [Christian Leyva](https://chrisley.dev), antiguo miembro de SIAFI.

### Inspiración

El sitio web está inspirado en el diseño [Influencer Meet Tech](https://www.figma.com/community/file/1110086112339219385/influencer-meet-tech) creado por [Andikan Bassey](https://www.figma.com/@andikan) y otros diseñadores (el diseño esta licenciado sobre [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).

### Assets Utilizados
- [dddoodle](https://www.fffuel.co/dddoodle/)
- [Casual life 3D Assets](https://iconos8.es/illustrations/style--3d-casual-life)