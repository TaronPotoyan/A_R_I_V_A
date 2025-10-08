/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API: string;
  readonly VITE_KEY: string;
  // add other env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
