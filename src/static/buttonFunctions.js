console.log("hey ray");

let servicesCheckboxes = document.getElementsByClassName("services-checkbox");

for(let i = 0; i < servicesCheckboxes.length; i++) {
    // console.log(servicesCheckboxes[i].value);
    servicesCheckboxes[i].addEventListener("click", function() {
        toggleCheckbox(servicesCheckboxes[i].value);
    });
};

function toggleCheckbox(checkValue) {
    console.log("serviceArr: ", serviceArr);
}