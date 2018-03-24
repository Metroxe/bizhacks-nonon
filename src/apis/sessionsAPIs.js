import DatabaseManager from "../databaseManager";

module.exports = (app) => {
	app.get("/get_session", (req, res) => {
		const session = DatabaseManager.getInstance().getSession(req.query.id);
		if (session) {
			res.status(200).send(session);
		} else {
			res.sendStatus(404);
		}
	});

	app.post("/create_session", (req, res) => {
		const session = DatabaseManager.getInstance().createSession();
		res.send(session);
	});
};