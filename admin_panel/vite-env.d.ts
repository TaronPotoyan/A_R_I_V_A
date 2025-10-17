/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_API: string;
  readonly VITE_KEY: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
