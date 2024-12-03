const calculateBtn = document.getElementById("calculateBtn");
const formContainerEl = document.getElementById('form_container');
const messageEl = document.getElementById('message');

const calculateMarks = (formInputs) => {
    let totalMarks = 0;
    for (const i in formInputs) {
        if (Object.prototype.hasOwnProperty.call(formInputs, i)) {
            const inputElement = formInputs[i];
            totalMarks += parseInt(inputElement.value);
        }
    }
    const percentage = (totalMarks / 400) * 100;

    messageEl.innerText = `You have got ${totalMarks} marks out of 400 and your percentage is ${percentage}%`;
    formContainerEl.appendChild(messageEl);
    messageEl.classList.remove("hide");
};

calculateBtn.addEventListener("click", (event) => {
    const formInputs = document.querySelectorAll("input.marks");
    let isValid = true;

    formInputs.forEach((input) => {
        const value = Number(input.value);
        if (value < 0 || value > 100 || isNaN(value)) {
            isValid = false;
            input.setCustomValidity("Enter a number between 0 and 100.");
            input.reportValidity();
        } else {
            input.setCustomValidity("");
        }
    });

    if (isValid) {
        event.preventDefault();
        calculateMarks(formInputs);
    }

});




