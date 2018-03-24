const randomcustName  = ["Queen Elizabeth", "Bruce Wayne", "Super Mario", "Hello Kitty", "Chris Powroznik", "Bill Nye", "Jimmy Neutron", "Harry Potter", "Leonardo DiCaprio", "Doctor Strange"];
const randomAddress1s = ["123 Dont St", "242 Know St", "5832 What Ave.", "493 Todo Place", "602 Wall Street", "321 Diagon Alley", "5024 W Broadway", "128 Paint Street", "2205 Lower Mall", "510 West 14th Ave."];
const randomAddress2s = ["", "PO Box #1234", "", "Suite 304", "PO Box #3948", "", "Suite 201", "PO Box #984", "PO Box #430", "Suite 120"];
const randomrepName   = ["Ironman", "Starlord", "Stan Lee", "Hulk", "Thor", "Groot", "Gamora", "Rocket Raccoon", "Thanos", "Dormammu"];
const randpostalCode  = ["L4T 1A8", "V6T 1Z4", "A1B 2C3", "O3M 2N6", "I9A 4V3", "Q2E 3V1", "P4M 8N8", "O0O 0O0", "E3E 3E3", "S2S 2S2"];
const randCity        = ["Vancouver", "Toronto", "Halifax", "Montreal", "Ottawa", "Gotham", "Paris", "London", "Seoul", "Tokyo"];
const randProv        = ["British Columbia", "Alberta", "Nova Scotia", "Quebec", "Ontario", "Prince Edward Island", "Manitoba"];
const services        = [
	{des: "TV Setup", price: 349.99},
	{des: "Protection Plan", price: 49.99},
	];
//const randcardNo    = ["4532293777631532", "5440792610152489", "4532556754833556", "5506566476855802",
// "5273910277446372", "5503306464560251", "5371179162607883", "5124984581790693", "4916420136817868",
// "5124889147306852"];


export default class Session {
	customerCode;
	adminCode;
	customerName;
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
		this.customerName      = "";
		this.serviceArr        = [];
		this.status            = false;
		this.customer_address1 = "";
		this.customer_address2 = "";
		this.city              = "";
		this.province          = "";
		this.postalCode        = "";
		this.cardNo            = "";
		this.cvv               = 0;
		this.expirationMonth   = 0;
		this.expirationYear    = 0;
		this.repName           = "";
		this.date              = new Date();
	}

	static randomString() {
		let text       = "";
		const possible = "abcdefghijklmnopqrstuvwxyz0123456789";

		for (let i = 0; i < 5; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}

	static getRandomFromArray(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	preInflate() {
		this.customer_address1 = Session.getRandomFromArray(randomAddress1s);
		this.customer_address2 = Session.getRandomFromArray(randomAddress2s);
		this.customerName      = Session.getRandomFromArray(randomcustName);
		this.repName           = Session.getRandomFromArray(randomrepName);
		this.postalCode        = Session.getRandomFromArray(randpostalCode);
		this.city              = Session.getRandomFromArray(randCity);
		this.province          = Session.getRandomFromArray(randProv);
		//this.cardNo = Session.getRandomFromArray(randcardNo);
		//this.cvv = Math.floor((Math.random() * 900) + 100);
		//this.expirationMonth = Math.floor((Math.random() * 12)+1);
		//this.expirationYear = Math.floor((Math.random() * 82)+2018);
	}
}