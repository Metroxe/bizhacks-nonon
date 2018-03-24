console.log("hey ray");
let adminSubmitButton = document.getElementById("adminSubmitButton");
adminSubmitButton.addEventListener("click", function() {
    submitAdmin();
});

let servicesCheckboxes = document.getElementsByClassName("services-checkbox");

for(let i = 0; i < servicesCheckboxes.length; i++) {
    // console.log(servicesCheckboxes[i].value);
    servicesCheckboxes[i].addEventListener("click", function() {
        toggleCheckbox(servicesCheckboxes[i].value);
    });
};

function toggleCheckbox(checkValue) {
    serviceArr[checkValue].selected = !serviceArr[checkValue].selected;
    console.log(serviceArr[checkValue].selected);
}