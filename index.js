// code away!
const server = require("./server");

require('dotenv').config()

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`API on port ${port}`);
});
