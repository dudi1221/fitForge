import { Pool } from "pg";

export const db = new Pool({
    user: 'dudi',
  host: 'localhost',
  database: 'shopping_list',
  password: 'shuki1221',
  port: 5432,
});

db.query('SELECT NOW() as current_time', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Query result:', res.rows);
  }

  db.end();
});
