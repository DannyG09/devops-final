const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo desde DevOps Danny Enmanuel Guerrero Martinez 2024-0092 CI/CD!");
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log("Servidor corriendo en puerto " + port));
}

module.exports = app;
