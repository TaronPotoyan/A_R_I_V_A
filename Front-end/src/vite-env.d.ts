/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SERVER_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// Declarations for importing static assets
declare module '*.svg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}
