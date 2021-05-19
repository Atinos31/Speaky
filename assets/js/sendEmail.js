function sendForm(contactForm) {
    emailjs.send("speaky", "template_imyx42d" {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent!');
                document.getElementById("form").reset();

            },
            function(error) {
                alert('Oooops! something went wrong, please refresh the page');
                //document.getElementById("form").reset(); //form reset

            }
        );
    return false; // To block from loading a new page
}