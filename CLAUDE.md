# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site for Cava Casa Vieja, a wine bar / pizzeria in Mexico. React 19 + Vite 8 + Tailwind CSS v4, plain JavaScript (JSX, no TypeScript). Primary content language is Spanish; English is provided via an in-app ES/EN toggle.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/` (gitignored)
- `npm run preview` — serve the built `dist/`
- `npm run lint` — ESLint (flat config: `@eslint/js` recommended, `react-hooks`, `react-refresh`)

There is no test framework configured.

## Architecture

- **One scrolling page, no router.** [src/App.jsx](src/App.jsx) stacks section components from [src/pages/](src/pages/) (Hero, AboutUs, Menu, Reservations, Location) plus Footer. Navigation is anchor links (`#nosotros`, `#menu`, `#reservaciones`, `#ubicacion`) to section `id`s; the `sections` array in [src/components/Header.jsx](src/components/Header.jsx) must match those ids, since an `IntersectionObserver` uses them to highlight the active nav link, and each id doubles as its `nav.<id>` translation key. The hero (`#inicio`) is observed too, so no link is active at the top. The desktop nav shows from `lg`; below that a hamburger opens a full-screen overlay.

- **Sticky header + anchor offset.** The header is `sticky` (always visible, part of the layout) with height `--header-h` defined in [src/index.css](src/index.css) (5rem, 6rem from `lg`). `html { scroll-padding-top: var(--header-h) }` makes every anchor land right below it, so sections must *not* add their own `scroll-mt-*`. The hero's height is `100svh - var(--header-h)`. `body` uses `overflow-x: clip`: `hidden` makes `body` a second scroll container (double scrollbar) and breaks `sticky`.

- **Location + footer** share one background: the wrapper in [src/App.jsx](src/App.jsx) carries the image and overlay, and `LocationPage`/`Footer` are transparent on top of it.

- **i18n** lives in [src/context/](src/context/): `LanguageProvider` (in `LanguageContext.jsx`) holds `lang` (`"es"` default / `"en"`), keeps `<html lang>` in sync, and exposes `{ lang, setLang, toggleLang, t }`. The context object and the `useLanguage` hook live in `context/useLanguage.js` so the `.jsx` file only exports components (ESLint's react-refresh rule fails otherwise); consumers import `useLanguage` from there. Two patterns are used:
  - General UI strings: `t("section.key")` with dot-path lookup into [src/data/translations.js](src/data/translations.js) (`translations.es` / `translations.en`, same shape). Missing keys fall back to returning the key string.
  - Menu content: each menu page has its own data file in [src/data/](src/data/) exporting `{ es: {...}, en: {...} }`; components pick `data[lang]` and render it. Keep the `es` and `en` objects structurally identical.

- **Menu flipbook.** [src/components/Menu.jsx](src/components/Menu.jsx) wraps `react-pageflip-enhanced` (`HTMLFlipBook`) with 6 pages in left/right pairs (Food, Drinks 1, Drinks 2). Each page is a `*Left`/`*Right` component paired with a matching data file, listed in the `pages` array. The open two-page spread is used from `lg` (1024px); below that the book uses `singlePage` (one page, max 520px wide). Page width comes from the container width (a `ResizeObserver`, not window resize, so the mobile address bar doesn't trigger remounts). Page height is the tallest page's content, measured from invisible copies of the pages rendered at the same width (never below the design ratio, 1.1875 spread / 1.25 single): pages must never scroll internally, because on touch screens that inner scroll swallowed the vertical swipe and trapped the user. PageFlip reads size/mode only on init, so the book's `key` includes mode and size, and `startPage={currentPage}` keeps the reader's page across remounts (resize, rotation, language). `canGoForward` and the page indicator depend on the mode. Inside pages, layout breakpoints are container queries (`@sm:`, the page is an `@container`), not viewport ones (`sm:`), since the page width doesn't follow the window. [src/pages/MenuPage.jsx](src/pages/MenuPage.jsx) owns the `bookRef` and current page so its "Comida"/"Bebidas" tabs can call `pageFlip().flip(index)`; adding/removing pages requires updating `totalPages` in Menu and the tab indices/active logic in MenuPage. Rows are rendered with `MenuItem`. Page content is tuned to fit the desktop page (512×608 px) at the design ratio: wines, beers and non-alcoholic drinks use two columns (items with a `description` on the left, the rest on the right, stacked below `@sm`), and some Spanish texts are deliberately short; longer content makes the whole book taller rather than overflowing. Check for overflow in both languages whenever you change menu text or spacing. Pages default to `text-left` because `MenuPage` centers its contents.

- **Assets.** Icons and logos are in [public/](public/) and referenced by absolute path (`/Logo.svg`). Large background/hero images are in [src/assets/](src/assets/) and imported as modules. `components/Icon.jsx` renders an SVG via CSS mask so it can be recolored with a Tailwind `bg-*` class.

- **Styling** is Tailwind v4 via `@tailwindcss/vite` (`@import "tailwindcss"` in [src/index.css](src/index.css); no `tailwind.config`). Fonts (Crimson Text, Inter, Manrope) load from Google Fonts in [index.html](index.html). `RevealEffect` provides the fade-in-on-scroll wrapper used across sections.

- `StrictMode` is intentionally commented out in [src/main.jsx](src/main.jsx).

# Cava Casa Vieja — Sitio web

Landing page de una sola página para una cava en Tecate, B.C.
Stack: React + Vite + Tailwind CSS v4. JavaScript (no TypeScript).

## Estructura

- Secciones en src/pages/: HeroPage, AboutUsPage, MenuPage, ReservationsPage, LocationPage
- Navegación por anclas (#nosotros, #menu, #reservaciones, #ubicacion), sin router
- Header sticky siempre visible; las anclas se compensan con scroll-padding-top
- Menú tipo libro con react-pageflip-enhanced: 6 páginas (FoodMenuLeft/Right,
  DrinkMenu1Left/Right, DrinkMenu2Left/Right), usePortrait={false};
  libro abierto desde lg, una página por vez debajo; altura medida del contenido
- Rejillas de dos columnas (Nosotros, Reservaciones) desde lg: en tablet se apilan
- StrictMode desactivado en main.jsx a propósito (duplicaba páginas del libro)
- Bilingüe ES/EN: LanguageContext.jsx + useLanguage.js, textos en
  src/data/translations.js y datos del menú en src/data/\*.js por idioma
- Animaciones de aparición con el componente RevealEffect

## Convenciones

- Paleta: tonos stone/taupe/amber, tipografía serif
- Mantener el diseño fiel al archivo de Figma
- Explicar los cambios: este es un proyecto de aprendizaje
