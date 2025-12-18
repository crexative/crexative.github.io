// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://crexative.com',
    base: '/',
    compressHTML: true,
    build: {
        inlineStylesheets: 'always', // Inline all CSS to reduce render-blocking
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
                        if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(name)) {
                            return `images/[name].[hash].[ext]`;
                        }
                        if (/\.(css)$/i.test(name)) {
                            return `css/[name].[hash].[ext]`;
                        }
                        return `assets/[name].[hash].[ext]`;
                    }
                }
            },
            cssCodeSplit: false, // Bundle CSS together for faster initial load
            sourcemap: false,
            minify: 'esbuild',
            target: 'es2020' // Modern browsers for smaller bundles
        },
        css: {
            devSourcemap: false
        }
    }
});
