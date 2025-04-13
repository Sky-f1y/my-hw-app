// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    this: "is",
    my: "web"
  });
});

if (require.main === module) {
  const port = process.env.PORT || 6969;
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
