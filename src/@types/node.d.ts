declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    PORT: string;
    NODE_ENV: 'develop' | 'testing' | 'staging' | 'production';

    APP_API_URL: string;
    APP_WEB_URL: string;
  }
}
