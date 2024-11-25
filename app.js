let cvBtn = document.getElementById("cvBtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");
cvBtn.addEventListener("click", function() {
    alert(" Dowload Succesfully")

})

submit.addEventListener("click", function() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "" && password.value == "") {
        alert(" Please Fill Deatils")
    } else {
        alert("Logged In")
    }
})

let ul = document.querySelector("ul");
bar.addEventListener("click", function() {

    ul.classList.toggle("showData");

    if (ul.className == "showData") {
        bar.className = "fa-solid fa-xmark"
    } else {
        bar.className = "fa-solid fa-bars"
    }

})