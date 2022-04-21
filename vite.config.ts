import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import { createVuePlugin } from 'vite-plugin-vue2'

import { customPlugin } from './plugins/custom-plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        customPlugin(),
        // Inspect(),
        createVuePlugin(),
    ]
})
