document.getElementById('login-form').addEventListener('submit',function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === "Janrich" && password === "Natavio") {
        window.open('C:\Users\Janrich\Desktop\HTML');
    } else {
        alert('Incorrect Password Or Username Please Try again');
    }
});