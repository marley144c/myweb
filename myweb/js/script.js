document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");
    const preview = document.getElementById("form-preview");

    if (!form || !feedback || !preview) {
        console.error("Contact form elements could not be found.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            feedback.textContent =
                "Please complete your name, email, and message.";

            preview.hidden = true;
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            feedback.textContent =
                "Please enter a valid email address.";

            preview.hidden = true;
            return;
        }

        document.getElementById("preview-name").textContent = name;
        document.getElementById("preview-email").textContent = email;
        document.getElementById("preview-message").textContent = message;

        feedback.textContent =
            "Success! Your message has been validated and is ready for review.";

        preview.hidden = false;
    });
});