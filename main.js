document.addEventListener("DOMContentLoaded", function() {
    const selectAccountButton = document.getElementById("selectAccountButton");
    const accountModal = document.getElementById("accountModal");
    const paymentModal = document.getElementById("paymentModal");
    const closeButtons = document.querySelectorAll(".close");
    const accountOptions = document.querySelectorAll(".accountOption");

    selectAccountButton.addEventListener("click", function() {
        accountModal.style.display = "block";
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            this.closest(".modal").style.display = "none";
        });
    });

    accountOptions.forEach(option => {
        option.addEventListener("click", function() {
            accountModal.style.display = "none";
            paymentModal.style.display = "block";
        });
    });

    window.addEventListener("click", function(event) {
        if (event.target == accountModal) {
            accountModal.style.display = "none";
        }
        if (event.target == paymentModal) {
            paymentModal.style.display = "none";
        }
    });
});
