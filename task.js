document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const passInput = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const passError = document.getElementById("passError");

    let valid = true;

    // Reset previous errors
    nameInput.classList.remove("input-error");
    passInput.classList.remove("input-error");
    nameError.textContent = "";
    passError.textContent = "";

    // Check Name
    if(nameInput.value !== "Mikko"){
        nameInput.classList.add("input-error");
        nameError.textContent = "Wrong Name";
        valid = false;
    }

    // Check Password
    if(passInput.value !== "2722005"){
        passInput.classList.add("input-error");
        passError.textContent = "Wrong Password";
        valid = false;
    }

    // If both correct
    if(valid){
        window.location.href = "hby.html";
    }
});