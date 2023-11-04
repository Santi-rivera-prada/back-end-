import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: 'musica',
      user:     `${process.env.DB_USER}`,
      password: `${process.env.DB_PASSWORD}`
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  // ... (tus otras configuraciones de staging y producción)
};
