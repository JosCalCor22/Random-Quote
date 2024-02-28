# Random Quote

[![Versión](https://img.shields.io/badge/versi%C3%B3n-v1.0.0-blue.svg)](https://github.com/tuusuario/tuproyecto/releases/tag/v1.0.0)
[![HTML](https://img.shields.io/badge/html-5-orange)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/css-3-brightgreen)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Tailwind](https://img.shields.io/badge/tailwind-css-%2338B2AC)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/react-%5E17.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%5E4.1.2-blue)](https://www.typescriptlang.org/)

## Descripción del Proyecto

Random Quote es un proyecto que funciona como generador de citas aleatorias, obteniendo citas a través de una API. El desarrollo de este proyecto tuvo una duración de un mes e involucró el uso de HTML, CSS, Tailwind y React con TypeScript.

## Funcionalidades

- Generación de citas aleatorias mediante el consumo de una API.

## Tecnologías Utilizadas

- HTML
- CSS
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/) con [TypeScript](https://www.typescriptlang.org/)

## Duración del Proyecto

1 mes

## Habilidades Utilizadas

- Uso de cambio de clases mediante eventos.
- Gestión de estado.
- Consumo de API.
- Manipulación de datos.
- Manejo de los tiempos de carga durante el consumo de la API.

## Información Adicional

Este proyecto marcó la primera vez que implementé TypeScript. Fue un proceso interesante, ya que TypeScript introduce un mayor nivel de tipado en variables, estados, funciones, etc. Esto fue un cambio significativo para mí, haciendo la transición de usar React con JavaScript. La implementación de TypeScript en mi proyecto se sintió como una gran mejora.


--------- // --------- // --------- // --------- // --------- // --------- // --------- // --------- // --------- // --------- // ----

# Random Quote

[![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/tuusuario/tuproyecto/releases/tag/v1.0.0)
[![HTML](https://img.shields.io/badge/html-5-orange)](https://developer.mozilla.org/en/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/css-3-brightgreen)](https://developer.mozilla.org/en/docs/Web/CSS)
[![Tailwind](https://img.shields.io/badge/tailwind-css-%2338B2AC)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/react-%5E17.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%5E4.1.2-blue)](https://www.typescriptlang.org/)

## Project Description

Random Quote is a project that functions as a random quote generator, fetching quotes from an API. The development of this project lasted for one month and involved the use of HTML, CSS, Tailwind, and React with TypeScript.

## Features

- Generation of random quotes through API consumption.

## Technologies Used

- HTML
- CSS
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)

## Project Duration

1 month

## Skills Used

- Use of class changes through events.
- State management.
- API consumption.
- Data manipulation.
- Handling loading times during API consumption.

## Extra Information

This project marked the first time I implemented TypeScript. It was an interesting process, as TypeScript introduces a higher level of typing to variables, states, functions, etc. This was a significant change for me, transitioning from using React with JavaScript. Implementing TypeScript in my project felt like a great improvement.

--------- // --------- // --------- // --------- // --------- // --------- // --------- // --------- // --------- // --------- // ----

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
