function sendMail(params) {
    var tempParams ={
        from_name: document.getElementById('fname').value,
        to_name: "Eric",
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        language: document.getElementById('language').value,
    };

    emailsjs.send('service_u26rjlm', 'template_1029ss1', tempParams)
    .then(function(res) {
        console.log("success", res.status);
    })
}