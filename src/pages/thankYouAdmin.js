module.exports = (app) => {
	app.get("/thank_you_admin", (req, res) => {
		const id = req.query.id;
		res.send(
			"<head><link rel='stylesheet' href='/static/geekSquad.css'/></head>" +
			"<h1 style='display:table; margin:0 auto; top:40%; position: relative;'>geeksquad.ca/p?id="+id+"</h1>"
		);
	});
};