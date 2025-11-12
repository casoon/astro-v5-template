/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_MAIN_SITE_URL: string;
  readonly PUBLIC_AUTHOR: string;
  readonly PUBLIC_LOCALE: string;
  readonly PUBLIC_API_URL?: string;
  readonly PUBLIC_ENABLE_ANALYTICS: string;
  readonly PUBLIC_ENABLE_DARK_MODE: string;
  readonly PUBLIC_BUILD_TIME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
