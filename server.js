const express = require("express");
const app = express();

// تخزين بسيط (مؤقت)
let users = {};

// ✅ إضافة نقاط (يجي من CPX)
app.get("/reward", (req, res) => {
  const user = req.query.user_id;
  const reward = parseFloat(req.query.reward || 0);

  if (!user) {
    return res.send("no user");
  }

  if (!users[user]) {
    users[user] = 0;
  }

  users[user] += reward;

  console.log("User:", user, "Points:", users[user]);

  res.send("ok");
});

// ✅ جلب النقاط
app.get("/points", (req, res) => {
  const user = req.query.user_id;

  res.json({
    points: users[user] || 0
  });
});

// ✅ مهم لـ Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
