const express = require("express");
const app     = express();
const paymentPage = require("./src/pages/payment");
const adminPage = require("./src/pages/admin");
const thankYouAdmin = require("./src/pages/thankYouAdmin");
const thankYouPaymentPage = require("./src/pages/thankYouPayment");
const data = require("./src/pages/data");
const sessionsAPIs = require("./src/apis/sessionsAPIs");
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//create routes
paymentPage(app);
adminPage(app);
thankYouPaymentPage(app);
thankYouAdmin(app);
data(app);
sessionsAPIs(app);

app.use('/static', express.static('src/static'));

app.listen(3000, () => console.log("GeekSquad Payment Page listening on port 3000"));