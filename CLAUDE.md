# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 application built with Vite and TypeScript. The project uses the Vue 3 Composition API with `<script setup>` syntax.

## Development Commands

### Development Server
```sh
npm run dev
```
Starts the Vite dev server with hot-reload.

### Build
```sh
npm run build
```
Runs type-checking and builds for production. Internally runs both `type-check` and `build-only` in parallel using `npm-run-all2`.

### Type Checking
```sh
npm run type-check
```
Runs TypeScript type checking using `vue-tsc --build`. This must pass before production builds.

### Build Only (Skip Type Check)
```sh
npm run build-only
```
Builds the application without type checking.

### Preview Production Build
```sh
npm run preview
```
Preview the production build locally.

## Architecture

### Project Structure

- **`src/main.ts`**: Application entry point that creates and mounts the Vue app
- **`src/App.vue`**: Root component
- **`public/`**: Static assets served as-is (currently contains favicon.ico)

### TypeScript Configuration

The project uses a multi-config TypeScript setup:
- **`tsconfig.json`**: Root config that references app and node configs
- **`tsconfig.app.json`**: Config for application code (extends `@vue/tsconfig/tsconfig.dom.json`)
- **`tsconfig.node.json`**: Config for build tooling like `vite.config.ts` (extends `@tsconfig/node24`)

Path alias `@/*` maps to `./src/*` for cleaner imports.

### Vite Configuration

- Vue 3 plugin enabled
- Vue DevTools plugin enabled for development
- Path alias `@` configured to resolve to `./src`

## Node Version Requirements

This project requires Node.js `^20.19.0 || >=22.12.0` (specified in package.json engines field).
