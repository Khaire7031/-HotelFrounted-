# React + Vite

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

## Overview

Vite is a modern build tool that provides a fast development experience with features like HMR, optimized build, and more. This template sets up a React application with Vite, using either Babel or SWC for fast refresh and includes ESLint for code quality.

## Official Plugins

Currently, two official plugins are available for integrating React with Vite:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Uses [Babel](https://babeljs.io/) for Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Uses [SWC](https://swc.rs/) for Fast Refresh.

## Getting Started

Follow these steps to set up your React project with Vite.

### 1. Initialize the Project

Create a new Vite project with the React template:

```bash
npm create vite@latest my-react-app --template react
cd my-react-app
