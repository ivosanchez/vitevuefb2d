import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'
import ViteComponents from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    plugins: [
        vue(),
        Pages(),
        ViteComponents({
            customComponentResolvers: ViteIconsResolver(),
        }),
        Icons(),
    ],
}
