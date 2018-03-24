const database = {
	abc: {
		name: "Thomas",
		address: "123 fake street"
	},
	bcd: {
		name: "Spencer",
		address: "321 fake street"
	}
};

module.exports = (app) => {
	app.get("/payment", (req, res) => {
		const user = database[req.query.id];
		res.send(
			"<h1>Name: " + user.name + "</h1>" +
			"<h2> Address:" + user.address + "</h2>"
		);
	});
};