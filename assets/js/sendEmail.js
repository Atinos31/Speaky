function sendForm(contactForm) {
    emailjs.send("gmail", "template_04ew0co", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "feedback_summary": contactForm.feedbacksummary.value
        })
        .then(
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent')


            },
            function(error) {
                console.log('FAILED', error);
                alert('Oooops! something went wrong')

            }
        );
    return false; // To block from loading a new page


}

function clearForm($form) {
    $form.find(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $form.find(':checkbox, :radio').prop('checked', false);
}


//animate buttonvar animateButton = function(e) {