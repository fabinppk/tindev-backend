const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const port = parseInt(process.env.PORT, 10) || 3333;

const server = express();

mongoose.connect(
  "mongodb+srv://semana:semana@cluster0-pggb2.mongodb.net/omnistackTindev?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

server.use(cors());

server.use(express.json());

server.use(routes);

server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
});
