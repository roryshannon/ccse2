const Database = require('better-sqlite3');
const db = new Database('mydb.sqlite'); 

db.serialize(() => {
  db.run("CREATE TABLE products (id INT, name TEXT, age INT)");
  db.run("INSERT INTO products (id, name, price) VALUES (1, 'Jumper', 4000), (2, 'tshirt', 3000), (3, 'socks', 800), (4, 'fleece', 5000)");

  db.all("SELECT * FROM products", (err, rows) => {
    console.log(rows);
  });
});