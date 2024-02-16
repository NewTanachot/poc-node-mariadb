import { createPool } from 'mariadb';

const dbContext = createPool({
    host: 'localhost',
    user: 'myuser',
    password: 'mypassword',
    database: 'mydatabase',
});

export default dbContext