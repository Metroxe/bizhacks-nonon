module.exports = (app) => {
	app.get("/admin", (req, res) => {
		res.send(
			"<h1>Admin</h1>"
		);
	});
};