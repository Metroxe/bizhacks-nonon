const code = getParameterByName("id");
// let customerCode;
// let adminCode;
// let customerName;
// var serviceArr;
// let status;
// let customer_address1;
// let customer_address2;
// let city;
// let province;
// let postalCode;
// let cardNo;
// let cvv;
// let expirationMonth;
// let expirationYear;
// let repName;
// let date;
let session = {};
getSession();

function getSession() {
    axios.get("/get_session?id=" + code).then((res) => {
        session.customerCode = res.data.customerCode;
        session.adminCode = res.data.adminCode;
        session.customerName = res.data.customerName;
        session.serviceArr = res.data.serviceArr;
        session.status = res.data.status;
        session.customer_address1 = res.data.customer_address1;
        session.customer_address2 = res.data.customer_address2;
        session.city = res.data.city;
        session.province = res.data.province;
        session.postalCode = res.data.postalCode;
        session.cardNo = res.data.cardNo;
        session.cvv = res.data.cvv;
        session.expirationMonth = res.data.expirationMonth;
        session.expirationYear = res.data.expirationYear;
        session.repName = res.data.repName;
        session.date = res.data.date;
        prePopulate();
        populateExpenses();
        handleTotal();
    });
}

function submitForm() {
    // const session = {
    //     customerCode: customerCode,
    //     adminCode: adminCode,
    //     customerName: customerName,
    //     serviceArr: serviceArr,
    //     status: status,
    //     customer_address1: customer_address1,
    //     customer_address2: customer_address2,
    //     city: city,
    //     province: province,
    //     postalCode: postalCode,
    //     cardNo: cardNo,
    //     cvv: cvv,
    //     expirationMonth: expirationMonth,
    //     expirationYear: expirationYear,
    //     repName: repName,
    //     date: date
    // };
    console.log(session);
   return axios.post("/update_session", session);
}

function submitPayment() {
    submitForm().then((res) => {
        //redirect to thank you payment page
        window.location.href = "http://" + window.location.host + "/thank_you_payment";
    });
}

function submitAdmin() {
    submitForm().then((res) => {
        console.log(window.location.host + "/thank_you_admin?id=" + session.customerCode);
        window.location.href = "http://" + window.location.host + "/thank_you_admin?id=" + session.customerCode;
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