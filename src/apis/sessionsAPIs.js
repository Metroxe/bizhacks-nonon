import DatabaseManager from "../databaseManager";
import Session from "../session";

module.exports = (app) => {
	app.get("/get_session", (req, res) => {
		const session = DatabaseManager.getInstance().getSession(req.query.id);
		if (session) {
			// console.log(session);
			res.status(200).send(session);
		} else {
			res.sendStatus(404);
		}
	});

	app.post("/create_session", (req, res) => {
		const session = DatabaseManager.getInstance().createSession();
		res.send(session);
	});

	app.post("/update_session", (req, res) => {
		// const body = req.body;
		// const replacementSession = new Session();
		// const keys = Object.keys(body);
		// for (let key in keys) {
		// 	replacementSession[key] = body[key];
		// }
		DatabaseManager.getInstance().updateSession(req.body);
		console.log(DatabaseManager.getInstance().sessionArr);
		res.sendStatus(200);
	})
};