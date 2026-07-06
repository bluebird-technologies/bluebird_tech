import { defineConfig, globalIgnores } from 'eslint/config'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'

export default defineConfig([
    globalIgnores(['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts', 'public/**']),
    nextCoreWebVitals,
    nextTypescript,
    prettier,
])
