function showMessage() {
    alert("Hello! Welcome to my website 😊");
}
function showMessage() {
    alert("Hello! Welcome to my website 😊");
}

function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been sent.");

    document.querySelector("form").reset();
}