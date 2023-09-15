class Database {
  constructor(data) {
    if (Database.isExist) {
      return Database.instance;
    }
    Database.isExist = true;
    Database.instance = this;
    this.data = data;
  }

  main() {
    return this.data;
  }
}

const db = new Database("Mongo");
console.log(111, db.main());

const mysql = new Database("Mysql");
console.log(222, mysql.main());