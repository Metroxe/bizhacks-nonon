module.exports = (app) => {
	app.get("/thank_you_payment", (req, res) => {
		res.send(
			"<h1>Thank You Payment Page</h1>"
		);
	});
};