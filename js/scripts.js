// USER LOGIC

document.addEventListener("DOMContentLoaded", (e) => {
    const mrRobogersForm = document.getElementById("mrRobogersForm");
    mrRobogersForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userNumberInputValue = document.getElementById("userNumberInput").value;
        const result = numberToConvertedList(userNumberInputValue);

        document.getElementById("robogersOutput").innerText = result;

        document.getElementById("mrRobogersForm").reset();


    });

});

// BUSINESS LOGIC 

function numberToConvertedList(userNum) {
    const convertedNumArray = [];
    for (let i = 0; i <= userNum; i += 1) {
        if (shouldReturnBeep(i)) {
            convertedNumArray.push("beep");
        } else {
            convertedNumArray.push(i);
        }
    }
    return convertedNumArray;
}

function shouldReturnBeep(userNum) {
    let userNumToString = userNum.toString();
    for (let i = 0; i < userNumToString.length; i++) {
        if (userNumToString[i] === '1') {
            return true;
        }
    }
    return false;
}