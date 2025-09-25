document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const form = this;

  const templateParams = {
    user_name: form.querySelector('input[type="text"]').value,
    user_email: form.querySelector('input[type="email"]').value,
    message: form.querySelector('textarea').value
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
      Swal.fire({
        title: "✅ Message Sent!",
        text: "Thank you for contacting us. We will reply soon.",
        icon: "success",
        confirmButtonColor: "#facc15",
        confirmButtonText: "OK"
      });
      form.reset();
    }, function(error) {
      Swal.fire({
        title: "❌ Error",
        text: "Message could not be sent. Please try again later.",
        icon: "error",
        confirmButtonColor: "#facc15",
        confirmButtonText: "OK"
      });
    });
});
