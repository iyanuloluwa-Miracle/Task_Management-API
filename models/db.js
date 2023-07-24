const mysql = require('mysql2');
const password = process.env.password
const user = process.env.user



const dbConfig = {
    host: 'localhost',
    user: user,
    password: password,
    database: 'task_management',
};


const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = connection;