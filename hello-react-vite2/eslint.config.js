import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "no-unused-vars": "warn",               // 변수 선언 후 안 쓰면 노란 줄로만
      "react-hooks/exhaustive-deps": "warn", // 훅 의존성 배열 지적은 노란 줄로만
      "react-refresh/only-export-components": "warn", // 리프레시 관련 지적도 경고로
      "no-console": "warn",                  // 콘솔 로그쓰면 원래 빨간 밑줄 노란 줄로만
    },
  },
])
