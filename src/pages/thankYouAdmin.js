module.exports = (app) => {
	app.get("/thank_you_admin", (req, res) => {
		res.send(
			"<h1>Thank You Admin Page</h1>"
		);
	});
};