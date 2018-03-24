import DatabaseManager from "../databaseManager"

module.exports = (app) => {
	app.get("/admin", (req, res) => {
		const user = DatabaseManager.getInstance().getSession(req.query.id);
		if (!user) {
			res.send(
				"<h1>Please Provide a Valid URL</h1>"
			);
		}
	});
};