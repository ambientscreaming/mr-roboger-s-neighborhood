// USER LOGIC

document.addEventListener("DOMContentLoaded", (e) => {
    const mrRobogersForm = document.getElementById("mrRobogersForm");
    mrRobogersForm.addEventListener("submit", (e) => {
        const userNumberInputValue = document.getElementById("userNumberInput").value;
        const result = numberToConvertedList(userNumberInputValue);

        document.getElementById("robogersOutput").innerText = result;

        document.getElementById("mrRobogersForm").reset();

        e.preventDefault();

    });

});

// BUSINESS LOGIC 

function numberToConvertedList(userNum) {
    const convertedNumArray = [];
    for (let index = 0; index <= userNum; index += 1) {
        convertedNumArray.push(index);
    }
    return convertedNumArray;
}


