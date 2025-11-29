// Replaced unresolved vite/client types with manual process declaration
// Update: Removed conflicting 'process' declaration.
// Augment NodeJS.ProcessEnv to include API_KEY.

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
