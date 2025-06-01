import { genv } from './utils/env';

export const conf = {
  server: {
    port: parseInt(genv(process.env.PORT, '8000')),
    host: genv(process.env.HOST, 'localhost'),
  },

  urls: {
    activateRedirect: genv('ACTIVATION_REDIRECT', 'http://localhost:3000'),
  },

  defaultAdmin: {
    email: genv('DEFAULT_ADMIN_EMAIL', 'su@mail.com'),
    name: genv('DEFAULT_ADMIN_NAME', 'Admin'),
    password: genv('DEFAULT_ADMIN_PASSWORD', 'password'),
  },

  db: {
    host: genv('POSTGRES_HOST', 'localhost'),
    port: parseInt(genv('POSTGRES_PORT', '5432')),
    username: genv('POSTGRES_USER', 'billetsystem'),
    password: genv('POSTGRES_PASSWORD', 'password'),
    database: genv('POSTGRES_DB', 'billetsystem'),
  },

  jwt: {
    secret: genv('JWT_SECRET', 'helloworld'),
    lifespan: genv('JWT_LIFESPAN', '10080m'),
  },
};
