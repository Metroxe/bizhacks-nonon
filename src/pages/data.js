import DatabaseManager from "../databaseManager";

module.exports = (app) => {
	app.get("/data", (req, res) => {
		const sessions = DatabaseManager.getInstance().sessionArr;

		let html = "<head>" +
			"<script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script>" +
			"<style>" +
			"table, th, td {" +
			"    border: 1px solid black;" +
			"}" +
			"</style></head>" +
			"<h1>data</h1><br/>" +
			"<button onclick='addSession()' type='button'>Add Session</button><input type=\"button\" value=\"Refresh Page\" onClick=\"window.location.reload()\">\n<br/><br/>" +
			"<table style='width:100%'>";

		html += "<tr>" +
			"<th>Customer Code</th>" +
			"<th>Admin Code</th>";

		for (let session of sessions) {
			html += "<tr>" +
				"<th>" + session.customerCode + "</th>" +
				"<th>" + session.adminCode + "</th>" +
				"</tr>";
		}
		html += "</table>";
		html += "<script>" +
			"function addSession() {" +
			"axios.post('/create_session').then(() => {" +
			"window.location.reload()})" +
			"}" +
			"</script>";
		res.send(html);
	});
};