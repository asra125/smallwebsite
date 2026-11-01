
document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
});

// Demo contact form: validates the inputs and displays a confirmation.
// It does not send messages to an email inbox without a backend service.
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("name").value.trim();
        document.getElementById("formMessage").textContent =
            `Thank you, ${name}! Your message has been entered successfully.`;
        contactForm.reset();
    });
}
