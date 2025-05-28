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
      └── _base.scss
      └── _mixins.scss
      └── _variables.scss
      └── main.scss
  └── test/
  └── index.ts
public/
  └── index.html
  └── assets/
      └── images/
          └── favicon.png
          └── volume-off-svgrepo-com.svg
          └── volume-up-svgrepo-com.svg
.babelrc
.eslintignore
.eslintrc.json
.gitignore
.prettierignore
.prettierrc.json
CODE_QUALITY_REPORT.md
eslint.config.mjs
jest.config.js
package-lock.json
package.json
README.md
tsconfig.json
webpack.common.js
webpack.config.js
webpack.dev.js
webpack.prod.js
```

### Author: 
- [Github] [Proc3ssa](https://github.com/Proc3ssa)
- [ X ] [P R O C E S S O R](https://github.com/Proc3ssa)
  

