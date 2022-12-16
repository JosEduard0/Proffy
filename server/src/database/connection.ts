import knex from 'knex';
import path from 'path';

const db = (knex)({
  client: 'sqlite3',
  version: '^5.1.2',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

export default db;