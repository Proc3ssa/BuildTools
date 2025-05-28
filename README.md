# Build Tool Showcase

## 🔍 Overview
This project is a single-page application demonstrating a modern front-end development workflow using:
- **TypeScript**
- **Webpack (with dev/prod configs)**
- **SCSS with variables, mixins, and partials**
- **Theme switcher (light/dark)**
- **ESLint + Prettier integration**
- **Jest for unit testing**
- **Husky for pre-commit checks**

---

## 🚀 Setup & Run Instructions

```bash
npm install
npm run dev    # start dev server
npm run build  # create production build
```

---

## ⚙️ Build Tools

### Webpack
- Used for bundling the app
- Separate dev and prod configs
- Babel integration
- Code splitting and optimizations

### TypeScript
- Configured via `tsconfig.json`
- Loaded using `ts-loader` and `babel-loader`

### Sass (SCSS)
- Modular SCSS structure with:
  - `_variables.scss`
  - `_mixins.scss`
  - `_base.scss`
- Theme support: light/dark

---

## 🧹 Linting & Formatting

### ESLint
- Extended from `eslint:recommended` and `@typescript-eslint/recommended`
- Custom Rules:
  - `no-console`: warn
  - `@typescript-eslint/no-explicit-any`: error

### Prettier
- Integrated with ESLint
- Config: `semi: true`, `singleQuote: true`, `printWidth: 80`

### Scripts
```json
"lint": "eslint src --ext .ts",
"format": "prettier --write \"src/**/*.{ts,scss}\"",
"check": "npm run lint && npm run format",
"precommit": "npm run check"
```

---

## 🧪 Testing

- All tests in `/tests` folder
- Powered by **Jest** + **ts-jest**
- Example tested: `sum(a, b)`

Run tests with:
```bash
npm run test
```

---

## 📂 Folder Structure

```
src/
  └── styles/
  └── utils/
tests/
webpack.dev.js
webpack.prod.js
webpack.common.js
tsconfig.json
.babelrc
.eslintrc.json
```

