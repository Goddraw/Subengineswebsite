function sendMail(event) {
    event.preventDefault();
    var tempParams ={
        from_name: document.getElementById('fname').value,
        to_name: "Eric",
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        language: document.getElementById('language').value,
    };
    try{
        emailjs.send('service_u26rjlm', 'template_1029ss1', tempParams)
        .then(function(res) {
        console.log("success", res.status);
     })
    } catch(e) {
      console.log(e);
    }
  }
document.getElementById('submit-button').addEventListener('click', sendMail)