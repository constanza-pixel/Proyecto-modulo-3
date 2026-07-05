# SmartBudget

SmartBudget es una landing page responsive desarrollada como proyecto del módulo 3. Su objetivo es construir progresivamente una interfaz web funcional y escalable para el sitio de SmartBudget, utilizando herramientas modernas de front-end como metodologías CSS preprocesadores, layouts responsivos y frameworks como Bootstrap. 

## Descripción

La página permite mostrar los principales beneficios y funcionalidades de SmartBudget, además de incluir un formulario de contacto para que los usuarios puedan comunicarse.

El proyecto fue desarrollado aplicando buenas prácticas de HTML5, CSS3, SASS, Bootstrap y JavaScript.

## Tecnologías utilizadas

- HTML5
- CSS3
- SASS (Arquitectura 7-1)
- Bootstrap 4.6
- JavaScript
- Bootstrap Icons
- Git
- GitHub

## Estructura del proyecto

Uso de preprocesador SASS con estructura de carpetas tipo 7-1:

SmartBudget/
│
├── assets/
│   ├── css/
│   ├── img/
│   └── js/
│
├── sass/
│   ├── abstracts/
│   ├── base/
│   ├── components/
│   ├── layout/
│   ├── pages/
│   ├── themes/
│   ├── vendors/
│   └── main.scss
│
├── index.html
└── README.md

## Funcionalidades

- Landing page responsive.
- Menú de navegación adaptable.
- Hero principal con imagen ilustrativa.
- Sección de beneficios.
- Sección de funcionalidades.
- Formulario de contacto.
- Estilos organizados con SASS.
- Uso de Bootstrap para el diseño responsive.

## Responsive Design

El proyecto fue diseñado para adaptarse correctamente a:

- Celulares
- Tablets
- Laptops
- Monitores de escritorio

## Aprendizajes

Durante el desarrollo de este proyecto se aplicaron conocimientos de:

- Estructura semántica con HTML5.
- Diseño responsive con Bootstrap.
- Organización de estilos utilizando la arquitectura SASS 7-1.
- Validación básica de formularios con JavaScript.
- Uso de Git y GitHub para el control de versiones.

## Justificación 

En el desarrollo del proyecto Budget se adoptaron decisiones técnicas orientadas a garantizar orden, escalabilidad y consistencia visual. Estas se fundamentan en tres pilares: metodología de estilos, diseño de layout y uso de framework.

Metodología CSS (BEM)  
Se implementó la metodología BEM (Block, Element, Modifier) para organizar los estilos de manera modular y predecible. Esta convención de nombres evita conflictos con clases genéricas de Bootstrap, facilita la reutilización de componentes y asegura que cada bloque de la interfaz tenga estilos propios y aislados. Gracias a BEM, el código CSS se mantiene claro y escalable, lo que resulta esencial en un proyecto con múltiples vistas y componentes repetidos.

Layout (Flexbox, Grid y Media Queries)  
El diseño responsivo se construyó utilizando Flexbox y CSS Grid, herramientas que permiten un control preciso de la alineación y distribución de elementos. Flexbox se aplicó en estructuras lineales como barras de navegación y grupos de botones, mientras que Grid se utilizó en secciones más complejas como tablas de movimientos y paneles de perfil. Las media queries complementan este enfoque, asegurando que la interfaz se adapte correctamente a distintos dispositivos (desktop, tablet y móvil) sin perder coherencia visual.

Framework (Bootstrap 4.6)  
Se integró Bootstrap 4.6 como framework base para acelerar el desarrollo y garantizar consistencia en tipografía, espaciado y componentes comunes. Bootstrap aporta elementos listos para usar (navbar, dropdown), mientras que las clases personalizadas con BEM permiten ajustar la estética a las necesidades específicas del proyecto. Esta combinación ofrece un balance entre rapidez de implementación y personalización visual, evitando dependencias excesivas en estilos genéricos.

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/usuario/smartbudget.git
```

2. Ingresar al proyecto

```bash
cd smartbudget
```

3. Compilar SASS

```bash
sass --watch sass/main.scss assets/css/style.css
```

4. Abrir el archivo `index.html` en un navegador.

## Autor

**Constanza Yañez**

Proyecto desarrollado como práctica de Front-End utilizando HTML, SASS, Bootstrap y JavaScript.

---

## 📄 Licencia
Este proyecto fue desarrollado con fines educativos.