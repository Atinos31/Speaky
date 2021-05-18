function sendForm(contactForm) {
    emailjs.send("gmail", "template_04ew0co", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "feedback_summary": contactForm.feedbacksummary.value
        })
        .then(
            function(response) {
                //console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent!');
                document.getElementById("form").reset();


            },
            function(error) {
                alert('Oooops! something went wrong, please refresh the page');
                document.getElementById("form").reset();

            }
        );
    return false; // To block from loading a new page
}