document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const selectAccountButton = document.getElementById("selectAccountButton");
    const accountModal = document.getElementById("accountModal");
    const paymentModal = document.getElementById("paymentModal");
    const closeButtons = document.querySelectorAll(".close");
    const accountOptions = document.querySelectorAll(".accountOption");

    selectAccountButton.addEventListener("click", function() {
        console.log("Select account button clicked");
        accountModal.style.display = "block";
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            console.log("Close button clicked");
            this.closest(".modal").style.display = "none";
        });
    });

    accountOptions.forEach(option => {
        option.addEventListener("click", function() {
            console.log("Account option clicked");
            accountModal.style.display = "none";
            paymentModal.style.display = "block";
        });
    });

    window.addEventListener("click", function(event) {
        if (event.target == accountModal) {
            console.log("Outside account modal clicked");
            accountModal.style.display = "none";
        }
        if (event.target == paymentModal) {
            console.log("Outside payment modal clicked");
            paymentModal.style.display = "none";
        }
    });
});
