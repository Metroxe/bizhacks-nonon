import DatabaseManager from "../databaseManager"
const path = require('path');

module.exports = (app) => {
	app.get("/admin", (req, res) => {
		const user = DatabaseManager.getInstance().getSession(req.query.id);
		if (!user) {
			res.send(
				"<h1>Please Provide a Valid URL</h1>"
			);
		} else {
            res.sendFile(path.join(__dirname + '/html/admin.html'));
        }
	});
};