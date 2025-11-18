document.getElementById("submitNL").addEventListener("click", function () {
    const form = document.querySelector(".newsletterForm");

    if (form.checkValidity()) {
        alert("Merci de votre inscription à la Newsletter");
    } else {
        form.reportValidity();
    }
});