const mysql = require('mysql2');
const password = process.env.password
const user = process.env.user



const dbConfig = {
    host: 'bwlgoc2pcnb4cp2l2bfo-mysql.services.clever-cloud.com',
    user: user,
    password: password,
    database: 'bwlgoc2pcnb4cp2l2bfo',
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