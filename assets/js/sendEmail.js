function sendForm(contactForm) {
    emailjs.send("gmail", "template_04ew0co", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "feedback_summary": contactForm.feedbacksummary.value
        })
        .then(
            function(response) {
                console.log('SUCCESS!', response.status, response.text);


            },
            function(error) {
                console.log('FAILED', error);

            }
        );
    return false; // To block from loading a new page

}
//trigger when form submitted
/*$("#submit-button").submit(function(e) {
$("#registration").modal('show');
return false;
}); */

$(document).ready(function() {
    $('#submit-button').on('submit', function(e) {
        $('#registration').modal('show');
        e.preventDefault();
    });
});