// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    output: 'server',
    adapter: cloudflare({
        imageService: 'compile'
    }),
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
            config: {
                limitInputPixels: false,
            },
        },
    },
});
