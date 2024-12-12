let attempts = 0;
let username = prompt("Please enter your username:");
let password = prompt("Please enter your password:");

while (password !== "123" && attempts < 5) {
    password = prompt("Incorrect password. Please try again:");
    attempts++;
}

if (password === "123") {
    document.getElementById("username").innerHTML = `Username: ${username}`;
    document.getElementById("password").innerHTML = "Login Successful!";
    alert(`Welcome, ${username}!`);
} else {
    document.getElementById("username").innerHTML = "Login Failed!";
    document.getElementById("password").innerHTML = "Please try again later.";
    alert("Please try again later.");
}