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
			"<table style=''>";

		html += "<tr>" +
			"<th>Customer Code</th>" +
			"<th>Admin Code</th>" +
			"<th>Customer Name</th>" +
			"<th>Service</th>" +
            "<th>Customer Address 1</th>" +
            "<th>Customer Address 2</th>" +
            "<th>City</th>" +
            "<th>Province</th>" +
            "<th>Postal Code</th>" +
            "<th>Card #</th>" +
            "<th>CVV</th>" +
            "<th>Exp. MO</th>" +
            "<th>Exp. YR</th>" +
            "<th>Rep. Name</th>" +
            "<th>Date</th>" ;

		for (let session of sessions) {
			html += "<tr>" +
				"<td>" + session.customerCode + "</td>" +
				"<td>" + session.adminCode + "</td>" +
                "<td>" + session.customerName + "</td>" +
                "<td>" + session.serviceArr + "</td>" +
                "<td>" + session.customer_address1 + "</td>" +
                "<td>" + session.customer_address2 + "</td>" +
                "<td>" + session.city + "</td>" +
                "<td>" + session.province + "</td>" +
                "<td>" + session.postalCode + "</td>" +
                "<td>" + session.cardNo + "</td>" +
                "<td>" + session.cvv + "</td>" +
                "<td>" + session.expirationMonth + "</td>" +
                "<td>" + session.expirationYear + "</td>" +
                "<td>" + session.repName + "</td>" +
                "<td>" + session.date + "</td>" +
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