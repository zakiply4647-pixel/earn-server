const express = require("express");
const app = express();

let users = {};

app.get("/reward", (req, res) => {
  const user = req.query.user_id;
  const reward = parseFloat(req.query.reward || 0);

  if (!user) return res.send("no user");

  if (!users[user]) users[user] = 0;
  users[user] += reward;

  console.log(user, users[user]);

  res.send("ok");
});

app.get("/points", (req, res) => {
  const user = req.query.user_id;
  res.json({ points: users[user] || 0 });
});

app.listen(3000, () => console.log("running"));
