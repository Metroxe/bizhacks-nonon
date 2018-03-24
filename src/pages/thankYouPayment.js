const path = require('path');

module.exports = (app) => {
    app.get("/thank_you_payment", (req, res) => {
        res.sendFile(path.join(__dirname + '/html/thankYou.html'));
});
};