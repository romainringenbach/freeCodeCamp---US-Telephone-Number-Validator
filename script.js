const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const usTelephoneNumberRegexs = [
    /^1\s\d\d\d[\s-]\d\d\d[\s-]\d\d\d\d$/, // match 1 555-555-5555 or 1 555 555 5555
    /^1(\s\(\d\d\d\)\s|\(\d\d\d\))\d\d\d-\d\d\d\d$/, // match 1 (555) 555-5555 or 1(555)555-5555
    /^\d\d\d\d\d\d\d\d\d\d$/, // 5555555555
    /^\d\d\d-\d\d\d-\d\d\d\d$/, // 555-555-5555
    /^\(\d\d\d\)\d\d\d-\d\d\d\d$/ // (555)555-5555
]

checkBtn.addEventListener("click",() => {
    const value = userInput.value;

    if(value === ""){
        alert("Please provide a phone number");
        return;
    }

    if(usTelephoneNumberRegexs.some(el => el.test(value))){
        resultsDiv.textContent = `Valid US number: ${value}`
    } else {
        resultsDiv.textContent = `Invalid US number: ${value}`
    }
})

clearBtn.addEventListener("click",() => {
    resultsDiv.textContent = ""
})