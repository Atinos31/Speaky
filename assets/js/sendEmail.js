// Disable form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Get the forms we want to add validation styles to
        const forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function sendMail(contactForm) {
    emailjs.send("gmail", "template_04ew0co", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "feedback_summary": contactForm.feedbacksummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}