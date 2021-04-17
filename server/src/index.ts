import { createServer } from "http";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import WebSocket from "ws";
import Role from "./models/role.model";
import dbConfig from "./config/db.config";

const app = express();
const httpServer = createServer(app);
const router = express.Router();
const PORT = 8080;

app.use(cors());

// base prefix for Todo API
app.use('/todos', router);

const userSchema = new mongoose.Schema({
  username: String,
  salt: String,
  hash: String,
});
exports.User = mongoose.model("user", userSchema);

// connect to database
mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})  .then(() => {
  console.log("Successfully connect to MongoDB.");
  initial();
})
.catch(err => {
  console.error("Connection error", err);
  process.exit();
});

function initial() {
  Role.estimatedDocumentCount(undefined, (err: any, count: number) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

const authenticate = (name, pass, fn) => {

}

router.route('/login').post((req, res)) => {

});
