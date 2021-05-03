// Disable form submissions if there are invalid fields
const submit = document.getElementById("button");
submit.addEventListener("click", myFunction);

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

function myFunction() {
    document.getElementById("button").innerHTML = "sent";
}