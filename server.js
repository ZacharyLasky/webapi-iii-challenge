const express = require("express");

const userRouter = require("./users/userRouter");

const server = express();

server.use(express.json());
server.use("/userRouter", userRouter);

server.get("/", (req, res) => {
  res.send(`server test!`);
});

//custom middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      "Origin"
    )}`
  );
  next(); // tells express to move to next middleware in que
}

server.use(logger);

module.exports = server;
