require("dotenv").config();
import app from "./app";
import db from "./db";

const port = process.env.APP_PORT || 3000;

db.initialize().then(() => {
  console.log("Database connection is UP!");
  app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
  });
});
