console.log("hey ray");
let adminSubmitButton = document.getElementById("adminSubmitButton");
adminSubmitButton.addEventListener("click", function() {
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
};

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
    serviceArr[checkValue].selected = !serviceArr[checkValue].selected;
    console.log(serviceArr[checkValue].selected);
}