const code = getParameterByName("id");
let customerCode;
let adminCode;
let customerName;
var serviceArr;
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
getSession();

function getSession() {
    axios.get("/get_session?id=" + code).then((res) => {
        console.log(res.data);
        customerCode = res.data.customerCode;
        adminCode = res.data.adminCode;
        customerName = res.data.customerName;
        serviceArr = res.data.serviceArr;
        status = res.data.status;
        customer_address1 = res.data.customer_address1;
        customer_address2 = res.data.customer_address2;
        city = res.data.city;
        province = res.data.province;
        postalCode = res.data.postalCode;
        cardNo = res.data.cardNo;
        cvv = res.data.cvv;
        expirationMonth = res.data.expirationMonth;
        expirationYear = res.data.expirationYear;
        repName = res.data.repName;
        date = res.data.date;
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
    return axios.post("/update_session", session);
}

function submitPayment() {
    submitForm().then((res) => {
        //redirect to thank you payment page

    });
}

function submitAdmin() {
    let that = this;
    submitForm().then((res) => {
        console.log(window.location.host + "/thank_you_admin?id=" + customerCode);
        window.location.href = "http://" + window.location.host + "/thank_you_admin?id=" + customerCode;
    });
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}