import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
const app = express();

app.use(bodyParser.json());
// app.use(routes);
app.get("/common", (req, res) => {
  res.send("ok");
});

app.get("/api", (req, res) => {
  res.json({ success: true });
});

module.exports = app;
