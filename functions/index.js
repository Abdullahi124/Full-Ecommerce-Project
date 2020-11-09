const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");

const cors = require("cors");
const { request, response } = require("express");

const stripe = require("stripe")(
  "sk_test_51HSJboDFo0XWipNidBG9Bp4Nty7TvKfOWGTSMBLjfqdYqv7SHIthuWgAstKwjORYnxDKrwnbuYBzUny5sOKXY9ZS00JrFxcFgs"
);

//API

//App config
const app = express();

//Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//API Routes

app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Commands

exports.api = functions.https.onRequest(app);
