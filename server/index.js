const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
