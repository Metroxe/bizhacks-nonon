let totalPrice = 0;

let adminSubmitButton = document.getElementById("adminSubmitButton");
adminSubmitButton.addEventListener("click", function() {
    setAdminValues();
    submitAdmin();
});

let servicesCheckboxes = document.getElementsByClassName("services-checkbox");
let accordianHeaders = document.getElementsByClassName("mb-0");
let accordianDivs = document.getElementsByClassName("card-header");

for(let i = 0; i < servicesCheckboxes.length; i++) {
    // console.log(servicesCheckboxes[i].value);
    servicesCheckboxes[i].addEventListener("click", function() {
        toggleCheckbox(servicesCheckboxes[i].value);
    });
}

for(let i = 0; i < accordianHeaders.length; i++) {
    accordianHeaders[i].addEventListener("click", function() {
        if (accordianDivs[i].classList.contains("highlightHeader")) {
            accordianDivs[i].classList.remove("highlightHeader");
            accordianDivs[i].classList.remove("text-white");

        } else {
            accordianDivs[i].classList.add("highlightHeader");
            accordianDivs[i].classList.add("text-white");

        }
    });
}

function toggleCheckbox(checkValue) {
    session.serviceArr[checkValue].selected = !session.serviceArr[checkValue].selected;
    handleTotal();
    populateExpenses();
}

let totalPriceInput = document.getElementById("totalPriceInput");

function handleTotal() {
    let totalPriceTemp = 0;

    Object.keys(session.serviceArr).forEach(function(i) {
        if(session.serviceArr[i].selected) {
            totalPriceTemp += session.serviceArr[i].price;
        }
    });

    totalPriceTemp = totalPriceTemp.toFixed(2);
    totalPrice = totalPriceTemp;

    totalPriceInput.value = "$ " + totalPrice;
}

let saleInfoInputs = document.getElementsByClassName("sale-info-input");

function setAdminValues() {
    for(let i = 0; i < saleInfoInputs.length; i++) {
        Object.keys(session).forEach(function(j) {
            if(saleInfoInputs[i].id === j) {
                session[j] = saleInfoInputs[i].value;
            }
        });
    }
}

// expenses breakdown

let expensesListDisplay = document.getElementById("expensesListDisplay");

function populateExpenses() {
    expensesListDisplay.innerHTML = "";

    Object.keys(session.serviceArr).forEach(function(i) {
        if(session.serviceArr[i].selected) {
            let expenseListItemContainer = document.createElement("div");
            expenseListItemContainer.classList += "expenseListItem";

            let expenseListItemService = document.createElement("div");
            expenseListItemService.innerHTML = session.serviceArr[i].title;
            expenseListItemService.classList += "inlineBlockClass";

            let expenseListItemPrice = document.createElement("div");
            expenseListItemPrice.innerHTML = "$" + session.serviceArr[i].price;
            expenseListItemPrice.classList += "inlineBlockClass float-right";

            expenseListItemContainer.appendChild(expenseListItemService);
            expenseListItemContainer.appendChild(expenseListItemPrice);

            expensesListDisplay.appendChild(expenseListItemContainer);
        }
    });
};
function prePopulate() {
    for(let i = 0; i < saleInfoInputs.length; i++) {
        Object.keys(session).forEach(function(j) {
            if(saleInfoInputs[i].id === j) {
                saleInfoInputs[i].value = session[j];
            }
        });
    }
}