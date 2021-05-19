$(document).ready(function() {
    // code from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_submit_prevent customised to fit needs
    $("#form").submit(function(event) {
        event.preventDefault();
        const serviceID = "speaky";
        const templateID = "template_imyx42d";
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                //Display modal success
                $('#myModal').removeClass("hide");
                // alert(' Your message has been sent Successfully.')
                $("#form")[0].reset();
            }, () => {
                //Display modal error
                alert('Sorry, something went wrong, please refresh the page')
                $("#form")[0].reset();
            });
    });
});