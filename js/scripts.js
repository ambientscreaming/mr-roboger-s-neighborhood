// USER INTERFACE LOGIC

document.addEventListener("DOMContentLoaded", (e) => {
    const mrRobogersForm = document.getElementById("mrRobogersForm");
    mrRobogersForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userNumberInputValue = document.getElementById("userNumberInput").value;
        const result = numberToConvertedList(userNumberInputValue);

        document.getElementById("robogersOutput").innerText = result.join(", ");

        document.getElementById("mrRobogersForm").reset();

        animateTrolley();

    });

});

// BUSINESS LOGIC 

function animateTrolley() {
    const trolley = document.getElementById('trolley');
    const screenWidth = window.innerWidth;
    const trolleyWidth = trolley.clientWidth;
    const endPosition = screenWidth - trolleyWidth;

    trolley.style.transform = `translateX(${endPosition}px)`;


    setTimeout(() => {
        trolley.style.transform = 'translateX(0)';
    }, 5000);
}


function numberToConvertedList(userNum) {
    const convertedNumArray = [];
    for (let i = 0; i <= userNum; i += 1) {
        if (shouldSubstituteNumber(i, '3')) {
            convertedNumArray.push("won't you be my neighbor?");
        } else if (shouldSubstituteNumber(i, '2')) {
            convertedNumArray.push("boop");
        } else if (shouldSubstituteNumber(i, '1')) {
            convertedNumArray.push("beep")
        } else {
            convertedNumArray.push(i);
        }

    }
    return convertedNumArray;
}

function shouldSubstituteNumber(userNum, targetNum) {
    let userNumToString = userNum.toString();
    for (let i = 0; i < userNumToString.length; i++) {
        if (userNumToString[i] === targetNum) {
            return true;
        }
    }
    return false;
}