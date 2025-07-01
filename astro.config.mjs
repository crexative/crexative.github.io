// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://crexative.com',
    base: '/',
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto',
        assets: '_astro'
    },
    output: 'static',
    integrations: [],
    vite: {
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'assets/[name].[hash].js',
                    chunkFileNames: 'assets/[name].[hash].js',
                    assetFileNames: (assetInfo) => {
                        if (!assetInfo.name) return 'assets/[name].[hash].[ext]';
                        const name = assetInfo.name;
                        if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(name)) {
                            return `images/[name].[hash].[ext]`;
                        }
                        if (/\.(css)$/i.test(name)) {
                            return `css/[name].[hash].[ext]`;
                        }
                        return `assets/[name].[hash].[ext]`;
                    }
                }
            },
            cssCodeSplit: true,
            sourcemap: false,
            minify: 'esbuild'
        },
        css: {
            devSourcemap: false
        }
    }
});
