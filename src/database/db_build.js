const fs = require("fs");
const db_connection = require("./db_connection");

const build_file = fs.readFileSync(__dirname + "/db_build.sql", "utf8");

db_connection.query(build_file, (error, result) => {
  if (error) {
    console.log("Failed", error);
  } else {
    console.log("Success!");
    //always close your connection
    db_connection.end(() => {
      console.log("connection closed");
    });
  }
});
