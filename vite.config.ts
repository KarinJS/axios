import { resolve } from 'path'
import pkg from './package.json'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import { builtinModules } from 'node:module'

export default defineConfig({
  build: {
    target: 'es2022',
    lib: {
      formats: ['es'],
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      /** 忽略打包的依赖项 */
      external: [
        ...builtinModules,
        ...builtinModules.map((mod) => `node:${mod}`),
      ],
    },
    minify: 'terser'
  }, plugins: [
    dts({
      rollupTypes: true,
      bundledPackages: Object.keys(pkg.devDependencies),
      staticImport: true
    })
  ]
})
