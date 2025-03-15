function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function checkEmail() {
    const email = document.getElementById("emailInput").value;
    const result = document.getElementById("result");

    if (validateEmail(email)) {
        result.textContent = "✅ Valid email address!";
        result.style.color = "green";
    } else {
        result.textContent = " Please check your email!";
        result.style.color = "red";
    }
}