const { Pool, Client } = require('pg');
const connectionString = 'postgres://imglfyro:UkcOuKBybnZi6GPbbz1f4eLRczNmoffm@baasu.db.elephantsql.com:5432/imglfyro';

const pool = new Pool({
  connectionString: connectionString,
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// })

export default pool;
