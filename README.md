# Smooth Scroll en JS vanilla

## Tabla de contenidos
1. [Introduction](#introducción)
2. [Features](#Características)
3. [Setup and Usage](#Configuración-y-Uso)
4. [Code Explanation](#Explicación-del-Código)
5. [License](#Licencia)
6. [English Version](#ENGLISH)

## Introducción

La función de desplazamiento suave mejora el comportamiento de desplazamiento predeterminado, proporcionando una transición más suave cuando el usuario se desplaza utilizando la rueda del ratón o gestos táctiles. Esto se logra actualizando gradualmente la posición de desplazamiento en lugar de saltar directamente a la nueva posición.

## Características

- **Diseño Responsivo**: Se ajusta automáticamente a los eventos de cambio de tamaño de la ventana.
- **Desplazamiento Suave**: Proporciona una experiencia de desplazamiento suave utilizando `requestAnimationFrame`.
- **Soporte para Táctil**: Incluye soporte para eventos táctiles, haciéndolo amigable para dispositivos móviles.

## Configuración y Uso

1. **Estructura HTML**: Asegúrate de que tu contenido principal esté envuelto en un elemento con el atributo `data-scroll-content`.
    ```html
    <div data-scroll-content>
        <!-- Tu contenido aquí -->
    </div>
    ```

2. **JavaScript**: Incluye el código JavaScript proporcionado en tu proyecto.
    ```html
    <script src="path/to/smoothScroll.js"></script>
    ```

3. **Inicialización**: El script inicializará automáticamente el comportamiento de desplazamiento suave al cargar la página.

## Explicación del Código

### Declaraciones de Variables

- **mainContent**: Selecciona el elemento principal de contenido basado en el atributo `data-scroll-content`.
    ```javascript
    const mainContent = document.querySelector('[data-scroll-content]');
    ```

- **windowValues**: Contiene la altura y el ancho actuales de la ventana.
    ```javascript
    const windowValues = {
        height: window.innerHeight,
        width: window.innerWidth
    };
    ```

### Listeners de Eventos

- **onResize**: Actualiza `windowValues` cuando se cambia el tamaño de la ventana.
    ```javascript
    const onResize = () => {
        windowValues.height = window.innerHeight;
        windowValues.width = window.innerWidth;
    };
    window.addEventListener('resize', onResize);
    ```

- **onScroll**: Maneja eventos de desplazamiento desde la rueda del ratón.
    ```javascript
    const onScroll = (e) => {
        targetPosition += e.deltaY;
        targetPosition = Math.max(0, targetPosition);
        targetPosition = Math.min(mainContent.scrollHeight - windowValues.height, targetPosition);

        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
        }
    };
    window.addEventListener('wheel', onScroll);
    ```

- **onScrollTouch**: Maneja eventos táctiles para el desplazamiento.
    ```javascript
    const onScrollTouch = (e) => {
        targetPosition += e.touches[0].clientY;
        targetPosition = Math.max(0, targetPosition);
        targetPosition = Math.min(mainContent.scrollHeight - windowValues.height, targetPosition);

        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
        }
    };
    ```

### Función de Desplazamiento Suave

- **smoothScroll**: Anima el efecto de desplazamiento.
    ```javascript
    const smoothScroll = () => {
        if (isScrolling) {
            currentPosition += (targetPosition - currentPosition) * acelleration;
            mainContent.style.transform = `translateY(${-currentPosition}px)`;

            if (Math.abs(targetPosition - currentPosition) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
            }
        }
    };
    ```

### Eventos Táctiles

- **onTouchStart**: Registra la posición inicial del toque.
    ```javascript
    const onTouchStart = (e) => {
        startTouchY = e.touches[0].clientY;
    };
    window.addEventListener('touchstart', onTouchStart);
    ```

- **onTouchMove**: Calcula el cambio en la posición del toque y actualiza la posición de desplazamiento en consecuencia.
    ```javascript
    const onTouchMove = (e) => {
        currentTouchY = e.touches[0].clientY;
        let delta = (startTouchY - currentTouchY) * 1.25;

        targetPosition += delta;
        targetPosition = Math.max(0, targetPosition);
        targetPosition = Math.min(mainContent.scrollHeight - windowValues.height, targetPosition);

        startTouchY = currentTouchY;

        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
        }
    };
    window.addEventListener('touchmove', onTouchMove);
    ```

    ## Licencia

Este proyecto se ecuentra bajo la MIT License.
    
# Vanilla JS Smooth Scroll

This project implements a smooth scrolling feature for a webpage. It leverages JavaScript to provide a more fluid and appealing scrolling experience for users.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Setup and Usage](#setup-and-usage)
4. [Code Explanation](#code-explanation)
5. [License](#license)

# ENGLISH

## Introduction

The smooth scroll feature enhances the default scrolling behavior, providing a smoother transition when the user scrolls using a mouse wheel or touch gestures. This is achieved by gradually updating the scroll position instead of jumping directly to the new position.

## Features

- **Responsive Design**: Adjusts automatically to window resize events.
- **Smooth Scrolling**: Provides a smooth scrolling experience using `requestAnimationFrame`.
- **Touch Support**: Includes support for touch events, making it mobile-friendly.

## Setup and Usage

1. **HTML Structure**: Ensure your main content is wrapped in an element with the attribute `data-scroll-content`.
    ```html
    <div data-scroll-content>
        <!-- Your content here -->
    </div>
    ```

2. **JavaScript**: Include the provided JavaScript code in your project.
    ```html
    <script src="path/to/smoothScroll.js"></script>
    ```

3. **Initialization**: The script will automatically initialize the smooth scrolling behavior on page load.

## Code Explanation

### Variable Declarations

- **mainContent**: Selects the main content element based on the `data-scroll-content` attribute.
    ```javascript
    const mainContent = document.querySelector('[data-scroll-content]');
    ```

- **windowValues**: Holds the current window height and width.
    ```javascript
    const windowValues = {
        height: window.innerHeight,
        width: window.innerWidth
    };
    ```

### Event Listeners

- **onResize**: Updates `windowValues` when the window is resized.
    ```javascript
    const onResize = () => {
        windowValues.height = window.innerHeight;
        windowValues.width = window.innerWidth;
    };
    window.addEventListener('resize', onResize);
    ```

- **onScroll**: Handles scroll events from the mouse wheel.
    ```javascript
    const onScroll = (e) => {
        targetPosition += e.deltaY;
        targetPosition = Math.max(0, targetPosition);
        targetPosition = Math.min(mainContent.scrollHeight - windowValues.height, targetPosition);

        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
        }
    };
    window.addEventListener('wheel', onScroll);
    ```

- **onScrollTouch**: Handles touch events for scrolling.
    ```javascript
    const onScrollTouch = (e) => {
        targetPosition += e.touches[0].clientY;
        targetPosition = Math.max(0, targetPosition);
        targetPosition = Math.min(mainContent.scrollHeight - windowValues.height, targetPosition);

        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
        }
    };
    ```

### Smooth Scrolling Function

- **smoothScroll**: Animates the scrolling effect.
    ```javascript
    const smoothScroll = () => {
        if (isScrolling) {
            currentPosition += (targetPosition - currentPosition) * acelleration;
            mainContent.style.transform = `translateY(${-currentPosition}px)`;

            if (Math.abs(targetPosition - currentPosition) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
            }
        }
    };
    ```

### Touch Events

- **onTouchStart**: Records the starting touch position.
    ```javascript
    const onTouchStart = (e) => {
        startTouchY = e.touches[0].clientY;
    };
    window.addEventListener('touchstart', onTouchStart);
    ```

- **onTouchMove**: Calculates the change in touch position and updates the scroll position accordingly.
    ```javascript
    const onTouchMove = (e) => {
        currentTouchY = e.touches[0].clientY;
        let delta = (startTouchY - currentTouchY) * 1.25;

        targetPosition += delta;
        targetPosition = Math.max(0, targetPosition);
        targetPosition = Math.min(mainContent.scrollHeight - windowValues.height, targetPosition);

        startTouchY = currentTouchY;

        if (!isScrolling) {
            isScrolling = true;
            requestAnimationFrame(smoothScroll);
        }
    };
    window.addEventListener('touchmove', onTouchMove);
    ```

## License

This project is licensed under the MIT License.

---

# Implementación de Desplazamiento Suave

Este proyecto implementa una función de desplazamiento suave para una página web. Utiliza JavaScript para proporcionar una experiencia de desplazamiento más fluida y atractiva para los usuarios.

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Características](#características)
3. [Configuración y Uso](#configuración-y-uso)
4. [Explicación del Código](#explicación-del-código)
5. [Licencia](#licencia)

