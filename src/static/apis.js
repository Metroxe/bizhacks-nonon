const id = getParameterByName("id");
getSession();
let customerCode;
let adminCode;
let customerName;
let serviceArr;
let status;
let customer_address1;
let customer_address2;
let city;
let province;
let postalCode;
let cardNo;
let cvv;
let expirationMonth;
let expirationYear;
let repName;
let date;

function getSession() {
	axios.get("/get_session?id=" + id).then((res) => {
		res.data.customerCode      = customerCode;
		res.data.adminCode         = adminCode;
		res.data.customerName      = customerName;
		res.data.serviceArr        = serviceArr;
		res.data.status            = status;
		res.data.customer_address1 = customer_address1;
		res.data.customer_address2 = customer_address2;
		res.data.city              = city;
		res.data.province          = province;
		res.data.postalCode        = postalCode;
		res.data.cardNo            = cardNo;
		res.data.cvv               = cvv;
		res.data.expirationMonth   = expirationMonth;
		res.data.expirationYear    = expirationYear;
		res.data.repName           = repName;
		res.data.date              = date;
	});
}

function submitForm() {
	const session = {
		customerCode: customerCode,
		adminCode: adminCode,
		customerName: customerName,
		serviceArr: serviceArr,
		status: status,
		customer_address1: customer_address1,
		customer_address2: customer_address2,
		city: city,
		province: province,
		postalCode: postalCode,
		cardNo: cardNo,
		cvv: cvv,
		expirationMonth: expirationMonth,
		expirationYear: expirationYear,
		repName: repName,
		date: date
	};
	axios.post("/update_session").then((res) => {
		//redirect to thank you page
	});
}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name        = name.replace(/[\[\]]/g, "\\$&");
	var regex   = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return "";
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}