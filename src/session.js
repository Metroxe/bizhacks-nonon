const randomcustName  = ["Queen Elizabeth", "Bruce Wayne", "Super Mario", "Hello Kitty", "Chris Powroznik", "Bill Nye", "Jimmy Neutron", "Harry Potter", "Leonardo DiCaprio", "Doctor Strange"];
const randomAddress1s = ["123 Dont St", "242 Know St", "5832 What Ave.", "493 Todo Place", "602 Wall Street", "321 Diagon Alley", "5024 W Broadway", "128 Paint Street", "2205 Lower Mall", "510 West 14th Ave."];
const randomAddress2s = ["", "PO Box #1234", "", "Suite 304", "PO Box #3948", "", "Suite 201", "PO Box #984", "PO Box #430", "Suite 120"];
const randomrepName   = ["Ironman", "Starlord", "Stan Lee", "Hulk", "Thor", "Groot", "Gamora", "Rocket Raccoon", "Thanos", "Dormammu"];
const randpostalCode  = ["L4T 1A8", "V6T 1Z4", "A1B 2C3", "O3M 2N6", "I9A 4V3", "Q2E 3V1", "P4M 8N8", "O0O 0O0", "E3E 3E3", "S2S 2S2"];
const randCity        = ["Vancouver", "Toronto", "Halifax", "Montreal", "Ottawa", "Gotham", "Paris", "London", "Seoul", "Tokyo"];
const randProv        = ["British Columbia", "Alberta", "Nova Scotia", "Quebec", "Ontario", "Prince Edward Island", "Manitoba"];
const services        = {
	tvSetup: {selected: false, price: 349.99, title: "TV Setup", category: "tv"},
    surraudSetup: {selected: false, price: 149.99, title: "Surround Audio Setup", category: "tv"},
    wireaudSetup: {selected: false, price: 99.99, title: "Wireless Audio Setup", category: "tv"},
    soundbarSetup: {selected: false, price: 99.99, title: "Sound Bar Setup", category: "tv"},
	tvprotectPlan: {selected: false, price: 49.99, title: "TV Protection Plan", category: "tv"},
    compSetup: {selected: false, price: 169.99, title: "Computer Setup", category: "computer"},
    compprotectPlan: {selected: false, price: 49.99, title: "Computer Protection Service Plan", category: "computer"},
    phoneSetup: {selected: false, price: 29.99, title: "Phone Setup", category: "cell phone"},
    phoneprotectPlan: {selected: false, price: 19.99, title: "Phone Protection Plan", category: "cell phone"},
    tabletSetup: {selected: false, price: 39.99, title: "Tablet Setup", category: "tablet"},
    tabletprotectPlan: {selected: false, price: 19.99, title: "Tablet Protection Plan", category: "tablet"},
    appliancesSetup: {selected: false, price: 159.99, title: "Appliances Setup", category: "appliances"},
    appliancesprotectPlan: {selected: false, price: 69.99, title: "Appliances Protection Plan", category: "appliances"},
    smarthomeSetup: {selected: false, price: 359.99, title: "Smart Home Setup", category: "home networking"},
    smarthomeprotectPlan: {selected: false, price: 99.99, title: "Smart Home Protection, Replacement Plan", category: "home networking"},
    gamingconsoleSetup: {selected: false, price: 59.99, title: "Gaming Console Setup", category: "gaming"},
    gamingprotectPlan: {selected: false, price: 19.99, title: "Gaming Console Protection Plan", category: "gaming"},
    camprotectPlan: {selected: false, price: 39.99, title: "Camera Protection Plan", category: "camera"},
	wearableSetup: {selected: false, price: 59.99, title: "Wearable Device Setup", category: "wearable"},
    wearableprotectPlan: {selected: false, price: 29.99, title: "Wearable Device Protection Plan", category: "wearable"}
};
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
		this.serviceArr        = services;
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
		this.date              = JSON.stringify(new Date());
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