const randomAddress1s = ["123 fake street", "abc phony drive"];
const randomAddress2s = ["", "po box #1234"];


export default class Session {
	customerCode;
	adminCode;
	serviceArr;
	status;
	customer_address1;
	customer_address2;
	city;
	province;
	postalCode;
	cardNo;
	cvv;
	expirationMonth;
	expirationYear;
	repName;
	date;

	constructor() {
		this.customerCode      = Session.randomString();
		this.adminCode         = Session.randomString();
		this.serviceArr        = [];
		this.status            = false;
		this.customer_address1 = "";
		this.customer_address2 = "";
		this.city              = "";
		this.province          = "";
		this.postalCode        = "";
		this.cardNo            = "";
		this.cvv               = "";
		this.expirationMonth   = "";
		this.expirationYear    = "";
		this.repName           = "";
		this.date              = new Date();
	}

	static randomString() {
		let text       = "";
		const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (let i = 0; i < 5; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}

	static getRandomFromArray(array) {
		Math.floor(Math.random() * array.length);
	}

	preInflate() {
		this.customer_address1 = Session.getRandomFromArray(randomAddress1s);
	}
}