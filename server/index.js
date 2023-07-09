const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const axios = require("axios");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  console.log(req.body);
  axios
    .post("https://eastmanchesterapi.azurewebsites.net//Customer", {
      id: req.body.id,
      created: req.body.created,
      passengerName: req.body.passengerName,
      pickUpLocation: req.body.pickUpLocation,
      dropOffAddress: req.body.dropOffAddress,
      pickUpTime: req.body.pickUpTime,
      contactPhoneNumber: req.body.contactPhoneNumber,
      numberOfPassengers: req.body.numberOfPassengers,
      email: req.body.email,
      bookingStatus: "",
    })
    .then((response) => {
      console.log(response);
      res.status(202).send("success");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("error");
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
