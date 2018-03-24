const express = require("express");
const app     = express();

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

app.get("/payment", (req, res) => {
	const user = database[req.query.id];
	res.send("<h1>Name: "+user.name+"</h1>" +
	"<h2> Address:" + user.address+ "</h2>"
	);
});

app.listen(3000, () => console.log("GeekSquad App listening on port 3000"));