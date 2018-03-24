const express = require("express");
const app     = express();
const paymentPage = require("./src/pages/payment");
const adminPage = require("./src/pages/admin");
const thankYouAdmin = require("./src/pages/thankYouAdmin");
const thankYouPaymentPage = require("./src/pages/thankYouPayment");
const data = require("./src/pages/data");

//create routes
paymentPage(app);
adminPage(app);
thankYouPaymentPage(app);
thankYouAdmin(app);
data(app);

app.use('/static', express.static('src/static'));

app.listen(3000, () => console.log("GeekSquad Payment Page listening on port 3000"));