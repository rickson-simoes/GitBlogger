/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TokenGithubKey: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}