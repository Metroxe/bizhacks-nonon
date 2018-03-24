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
const path = require('path');

module.exports = (app) => {
	app.get("/p", (req, res) => {
		const user = database[req.query.id];
		res.sendFile(path.join(__dirname + '/html/payment.html'));
	});
}; 