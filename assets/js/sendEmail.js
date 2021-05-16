/*function sendForm(contactForm) {
emailjs.send("gmail", "template_04ew0co", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback_summary": contactForm.feedbacksummary.value
    })
    .then(
        function(response) {
            console.log('SUCCESS!', response.status, response.text)

        },
        function(error) {
            console.log('FAILED', error);

        }
    );
return false; // To block from loading a new page

}*/

//modal after pressing submit button on feedback form from w3schools
// Get the modal
const modal = document.getElementById("modal-sent");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} * /
$(document).ready(function() {
    //https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_submit_prevent
    $("#form").submit(function(event) {
        event.preventDefault();
        const serviceID = "gmail";
        const templateID = "template_04ew0co";
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                //Display modal success
                $('#modal-sent').removeClass("hide");
                $("#form")[0].reset();
            }, () => {
                //Display modal error
                $('#modal-error').removeClass("hide");
                $("#form")[0].reset();
            });
        $("#form").addClass("hide");
    });
});