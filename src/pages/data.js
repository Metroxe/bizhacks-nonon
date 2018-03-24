import DatabaseManager from "../databaseManager";

module.exports = (app) => {
	app.get("/data", (req, res) => {
		const sessions = DatabaseManager.getInstance().sessionArr;

		let html = "<h1>data</h1><br/><p>";

		for (let session of sessions) {
			html += session.customerCode;
			html += "<br/>";
		}
		html += "</p>";
		res.send(html);
	});
};