const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request, response } = require('express');
const { scryRenderedComponentsWithType } = require('react-dom/test-utils');
const stripe = require("stripe")('sk_test_51HW3xzLkfDTCTqC5RwBS7yRWqgc3WfcEBxFLXkmREyBcikxxRVx9M4r08XYOaQeA1zTVIxtekSqERy0j3wnB3oKI00khB6R7hu')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  
  const paymenIntent = await scryRenderedComponentsWithType.paymenIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymenIntent.client_secret,
  })
})

// Listen command
exports.api = functions.https.onRequest(app)