const express = require("express");

const app = express();

app.get("/testing", (req, res) => {
  res.json(
    {
      id: "1",
      name: "mido",
    },
    { id: "2", name: "harry" }
  );
});

app.listen(2020, () => {
  console.log("serving runinng...");
});
