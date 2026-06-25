console.log("JS is working");

document.querySelector('#login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const message = document.getElementById("message");
    const btn = document.getElementById("login-btn");

    // reset message
    message.innerText = "";

    // 1. check empty fields
    if (email === '' || password === '') {
        message.innerText = "Please fill in all fields";
        return;
    }

    // 2. loading state
    btn.classList.add("loading");

    // simulate request
    setTimeout(() => {
        btn.classList.remove("loading");

        // 3. auth check
        if (email === 'admin@example.com' && password === 'password') {
            message.innerText = "Login successful!";
            message.style.color = "lightgreen";

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);

        } else {
            message.innerText = "Invalid email or password";
            message.style.color = "red";
        }

    }, 1500);
});